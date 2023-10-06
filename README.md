# Next.js Portfolio

---

### 개요

NextJs 최신 13 버전을 사용하여 개발한 Pre-rendering 방식의 나만의 포트폴리오 웹사이트 입니다.  
Notion API 를 호출하여 포트폴리오에 관련된 데이터를 가져와 정적페이지로 제공해줍니다.  
페이지 방문을 원하시면 여기로 (https://next-portfolio-resume-ts.vercel.app/) 이동 하세요.

---

Static Generation 방식을 이용하여 빌드시점에 pre-rendering 하여 정적페이지 사용

- getStaticProps 사용 :

  - 서버에서 미리 실행되며 클라이언트에서는 실행되지 않는다.
  - 페이지 렌더링에 필요한 데이터는 사용자 request 전에 빌드 시점에 HTML 파일 생성.
  - 페이지에서만 사용가능하다. (app, document, error 파일)에선 사용이 불가능.
  - React는 페이지가 렌더링되기 전에 필요한 모든 데이터를 가지고 있어야 하기 때문이다.
  - `cache: "force-cache"` 옵션을 통해 정적 페이지 설정  
    <br >

- ISR (Incremental Static Regeneration)
  - 설정한 시간 값 마다 페이지를 새로 렌더링 되며 SSG 에 포함되는 개념
  - SSG는 빌드 시에 페이지를 생성하기 때문에 fetching 데이터가 변경되면 다시 빌드해야 하지만 ISR은 일정 시간마다 알아서 페이지를 업데이트
  - ` next: { revalidate: * },` 옵션을 통해 페이지 재생성 시간 설정 가능

```ts
import { NotionAPI, ProjectData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export async function POST(req: NextRequest) {
  try {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
        Authorization: `Bearer ${notionSecret}`,
      },
      // SSG 사용
      cache: "force-cache" as RequestCache,
      // 자격증명 (ERROR : Upstream image response failed for 403)
      // credentials: "same-origin" as RequestCredentials,
      // ISR 사용
      // next: { revalidate: 60 },
    };

    // 노션 API 통신
    const response = await fetch(
      `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      options
    );
    const notionData = await response.json();

    //  받아온 API 데이터를 가공하여 작업에 필요한 데이터만 전달
    const projectData: ProjectData = notionData.results.map(
      (res: NotionAPI) => ({
        title: res.properties.name.title[0].plain_text,
        github: res.properties.GitHub.url,
        description: res.properties.Description.rich_text[0].plain_text,
        imgSrc: res.cover.file?.url,
        type: res.properties.Type.multi_select[0].name,
        tags: res.properties.Tags.multi_select,
        moreUrl: res.public_url,
      })
    );

    // console.log("[NOTION_API_DATA] : ", projectData);
    return NextResponse.json(projectData);
  } catch (error) {
    console.log("[NOTION_API_ERROR] : ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```
