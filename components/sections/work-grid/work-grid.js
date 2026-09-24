// Sanity
import { client } from "@/sanity/lib/client";
import {
    workGridQuery,
    workGridCountQuery,
    workCategoriesQuery,
} from "@/sanity/lib/queries";

// Components
import WorkGridItem from "./components/work-grid-item";
import WorkGridList from "./components/work-grid-list";

// Styles
import styles from "./styles/work-grid.module.scss";

export default async function WorkGrid({
    workGridContainerClass = undefined,
    hasNav = false,
    hasPagination = false,
}) {

    const isInteractive = hasNav || hasPagination;

    const [items, categories, total] = await Promise.all([
        client.fetch(workGridQuery, {}, {
            next: { revalidate: 1 },
        }),
        hasNav
            ? client.fetch(workCategoriesQuery, {}, {
                next: { revalidate: 1 },
            })
            : Promise.resolve([]),
        hasPagination
            ? client.fetch(workGridCountQuery, { categoryId: "" }, {
                next: { revalidate: 1 },
            })
            : Promise.resolve(0),
    ]);

    if (!items?.length) {
        return null;
    }

    return (

        <section
            id="workGrid"
            className={`row ${styles.workGridSection}`}
            style={{ gap: "0" }}
        >

            {isInteractive ? (

                <WorkGridList
                    initialItems={items}
                    initialTotal={total}
                    categories={categories}
                    hasNav={hasNav}
                    hasPagination={hasPagination}
                    workGridContainerClass={workGridContainerClass}
                />

            ) : (

                <div className={`container gapMd ${styles.workGridContainer} ${workGridContainerClass}`}>

                    <div className={styles.workGridItems}>

                        {items.map((item, index) => (

                            <WorkGridItem key={item._id} item={item} index={index} />

                        ))}

                    </div>

                </div>

            )}

        </section>

    )

}
