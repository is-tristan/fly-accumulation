import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"

export const structure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Work")
        .child(
          S.list()
            .title("Work")
            .items([
              orderableDocumentListDeskItem({
                type: "work",
                title: "Work",
                S,
                context,
              }),
              S.documentTypeListItem("workCategory").title("Work Categories"),
            ])
        ),
      orderableDocumentListDeskItem({
        type: "team",
        title: "Team",
        S,
        context,
      }),
      S.listItem()
        .title("Careers")
        .child(
          S.list()
            .title("Careers")
            .items([
              orderableDocumentListDeskItem({
                type: "career",
                title: "Roles",
                S,
                context,
              }),
              S.documentTypeListItem("careerCategory").title("Career Categories"),
            ])
        ),
      S.listItem()
        .title("News")
        .child(
          S.list()
            .title("News")
            .items([
              orderableDocumentListDeskItem({
                type: "news",
                title: "Articles",
                S,
                context,
              }),
              S.documentTypeListItem("newsCategory").title("Categories"),
              S.documentTypeListItem("newsAuthor").title("Authors"),
            ])
        ),
      S.documentTypeListItem("legal").title("Legal"),
    ])
