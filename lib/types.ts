export type NotionAPI = {
  properties: {
    name: {
      title: [{ plain_text: string }];
    };
    GitHub: {
      url: string;
    };
    Description: {
      rich_text: [{ plain_text: string }];
    };
    Type: {
      multi_select: [{ name: string }];
    };
    Tags: {
      multi_select: Array<{ id: string; name: string }>;
    };
  };
  cover: {
    file: {
      url: string;
    };
  };
  public_url: string;
};

export type ProjectData = {
  title: string;
  github: string;
  description: string;
  imgSrc: string;
  type: string;
  tags: { id: string; name: string }[];
  moreUrl: string;
};
