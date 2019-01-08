# Basic 14


##  Requirement


This exercise is designed to assess your coding and problem-solving style. Since there is no right or wrong answer, we will primarily be looking into how you structure your proposed solution and how you approach the given problems.

## Business rules

NTX is re-designing their product system to give more flexibility to clients on which products to purchase. Following is a table of products we offer:

| PRODUCT ID | PRODUCT NAME        | PRICE    |
| ---------- | ------------------- | -------- |
| wf         | Workflow            | \$199.99 |
| docgen     | Document Generation | \$9.99   |
| form       | Form                | \$99.99  |

Also, we currently have these promotion codes:

| PROMO CODE | DESCRIPTION                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| RRD4D32    | 10% discount for orders above \$1000 (pre-discount)                                |
| 44F4T11    | 15% discount for orders above \$1500 (pre-discount)                                |
| FF9543D1   | Reduces the docgen price to \$8.99 a unit when at least 10 documents are purchased |
| YYGWKJD    | Reduces the form price to\$89.99 a unit when at least 1 wf is purchased            |

For simplicity sake, only one promotion code can be applied at a time.

Requirements:

We would like you to implement a single checkout page, where you'll be able to select products, insert a promotion code (if any available), and being shown the payable amount.
Since promotion codes come and go, we want the pricing rules to be as flexible as possible so that could be changed in the future with little notice.

Outcomes examples:

|            |                |
| ---------- | -------------- |
| Products   | 2x wf          |
| Promotion: |                |
| Total      | \$399.98       |
|            |                |
| Products   | 6x wf          |
| Promotion: | RRD4D32        |
| Total      | \$1,079.94     |
|            |                |
| Products   | 1x wf, 1x form |
| Promotion: | YYGWKJD        |
| Total      | \$289.98       |

Directions:

• Feel free to make any assumptions where required to complete the exercise, unless contrary to what is specified in the business rules and/or requirements

• We are not aiming to get a perfect, production ready solution. Only spend enough time to produce a testable and maintainable solution for the requirements given.

• Architecture is up to you, if you want to make it front-end heavy fine, if you want to run it from an API layer, also fine. We suggest you focus on one side in the interests of time.

• Feel free to design the data required how you see fit.

• We won’t be judging the aesthetical aspect of the UI. Again, we will be more interested in how you structure code & stylesheets.



