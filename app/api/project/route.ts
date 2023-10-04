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
      // 'cache' 속성을 호환되는 타입으로 변환
      cache: "force-cache",
      // next: { revalidate: 70 },
    };

    // const reponse = await axios(options);
    const response = await fetch(
      `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      // options
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Notion-Version": "2022-06-28",
          "content-type": "application/json",
          Authorization: `Bearer ${notionSecret}`,
        },
        cache: "force-cache",
        // next: { revalidate: 70 },
      }
    );
    // const projectData = await reponse.data;
    const projectData = await response.json();

    //  추후 작업 예정 (가공된 데이터를 넘겨주기)
    // const rows = projectData.results.map((res: any) => res);
    // const rowData = rows.map((row: any) => ({
    //   title: row.properties.name.title[0].plain_text,
    //   github: row.properties.GitHub.url,
    //   description: row.properties.Description.rich_text[0].plain_text,
    //   imgSrc: row.cover.file?.url,
    //   type: row.properties.Type.multi_select[0].name,
    //   tags: row.properties.Tags.multi_select,
    //   moreUrl: row.public_url,
    // }));

    // console.log("[NOTION_API_DATA] : ", projectData);
    return NextResponse.json(projectData);
  } catch (error) {
    console.log("[NOTION_API_ERROR] : ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
