# Google Ads Material Campaign Structure

## Account structure

Run six US Search campaigns with lead generation as the objective:

| Campaign | Landing page |
| --- | --- |
| Search - US - PEEK - Leads | https://apexpolyworks.com/materials/peek |
| Search - US - PTFE - Leads | https://apexpolyworks.com/materials/ptfe |
| Search - US - UHMWPE - Leads | https://apexpolyworks.com/materials/uhmwpe |
| Search - US - ABS - Leads | https://apexpolyworks.com/materials/abs |
| Search - US - PC - Leads | https://apexpolyworks.com/materials/polycarbonate-pc |
| Search - US - Nylon - Leads | https://apexpolyworks.com/materials/nylon-pa |

Do not use the home page as a final URL. Append `utm_source=google&utm_medium=cpc&utm_campaign={material}&utm_content={ad_group}` to each material URL.

## Ad groups

Each campaign contains four high-intent ad groups:

| Ad group | Search intent | Core keyword pattern |
| --- | --- | --- |
| Supplier | Commercial sourcing | material supplier, material manufacturer |
| Sheet | Sheet and plate purchasing | material sheet supplier, material sheet manufacturer |
| Rod | Rod and bar purchasing | material rod supplier, material rod manufacturer |
| Machining | Drawing-based manufacturing | material CNC machining, material machining service |

Start with exact and phrase match. Review search terms weekly before broadening match types.

Apply all four ad groups to every material campaign. For example, the PEEK campaign contains PEEK Supplier, PEEK Sheet, PEEK Rod, and PEEK Machining; repeat the same structure for PTFE, UHMWPE, ABS, PC, and Nylon.

Keyword sets:

- Supplier: `[material supplier]`, `"material supplier"`, `[material manufacturer]`, `"material manufacturer"`.
- Sheet: `[material sheet supplier]`, `"material sheet supplier"`, `[material sheet manufacturer]`, `"material sheet"`.
- Rod: `[material rod supplier]`, `"material rod supplier"`, `[material rod manufacturer]`, `"material rod"`.
- Machining: `[material cnc machining]`, `"material cnc machining"`, `[material machining service]`, `"material machined parts"`.

For PC, test both `polycarbonate` and `pc plastic` variants. For Nylon, test `nylon`, `nylon pa`, and `polyamide` variants.

## Responsive search ad assets

Headline assets are kept within 30 characters and descriptions within 90 characters.

- `{Material} Supplier`
- `{Material} CNC Machining`
- `{Material} Sheet & Rod`
- `Factory Direct {Material}`
- `Fast Quote Within 24h`

Descriptions:

- `Fast quotations within 24 hours for sheet, rod, and custom CNC parts.`
- `OEM machining, factory-direct support, and global shipping for industrial buyers.`

Official specifications: [responsive search ads](https://support.google.com/google-ads/answer/7684791) and [Search campaign requirements](https://support.google.com/google-ads/answer/17092074).

## Negative keywords

Apply `google-ads-negative-keywords.txt` as an account-level list. Google notes that negative keywords reduce irrelevant traffic and account-level lists can apply across eligible Search inventory: [Google Ads negative keyword guidance](https://support.google.com/google-ads/answer/2453972).

## Conversion setup

- Primary conversion: RFQ success page view at `/thank-you`.
- Secondary conversion: WhatsApp outbound click.
- Keep one material per campaign so budget, search terms, conversion rate, and cost per RFQ remain attributable.
- Import the ad-group rows, then add location, schedule, bidding, and budget settings in Google Ads.
