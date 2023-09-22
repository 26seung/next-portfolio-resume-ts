import axios from "axios";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export async function POST(req: Request) {
  try {
    const options = {
      method: "POST",
      // url: `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      url: `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
        // Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        Authorization: `Bearer ${notionSecret}`,
      },
    };

    const reponse = await axios(options);
    // const projectData = await reponse.data;

    // console.log("[NOTION_API_DATA] : ", projectData);
    return NextResponse.json(reponse.data);
  } catch (error) {
    console.log("[NOTION_API_ERROR] : ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
