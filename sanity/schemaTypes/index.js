import { legal } from "./legal"
import { team } from "./team"
import { testimonial } from "./testimonial"
import { talent } from "./talent"
import { talentBrandDeal } from "./talentBrandDeal"
import { talentContentFocus } from "./talentContentFocus"
import { work } from "./work"
import { workCategory } from "./workCategory"

export const schemaTypes = (context) => [
  work(context),
  workCategory,
  talent(context),
  talentContentFocus,
  talentBrandDeal,
  team(context),
  testimonial(context),
  legal,
]
