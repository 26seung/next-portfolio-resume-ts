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
      // getStaticProps 사용: 빌드 시점 렌더링
      // cache: "force-cache" as RequestCache,
      // cache: "no-store" as RequestCache,
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
