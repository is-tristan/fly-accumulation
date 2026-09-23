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
      S.listItem()
        .title("Talent")
        .child(
          S.list()
            .title("Talent")
            .items([
              orderableDocumentListDeskItem({
                type: "talent",
                title: "Talent",
                S,
                context,
              }),
              S.documentTypeListItem("talentContentFocus").title("Content Focus"),
              S.documentTypeListItem("talentBrandDeal").title("Brand Deals"),
            ])
        ),
      orderableDocumentListDeskItem({
        type: "team",
        title: "Team",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "testimonial",
        title: "Testimonials",
        S,
        context,
      }),
      S.documentTypeListItem("legal").title("Legal"),
    ])
