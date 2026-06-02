# Apex PolyWorks

Next.js + TypeScript + Tailwind CSS B2B website for engineering plastics, plastic CNC machining, cut-to-size plastic sheets, rods, films, and custom plastic fabrication.

## Run

```bash
npm install
npm run dev
npm run build
```

## Site Structure

- Home
- Services
  - CNC Plastic Machining
  - Laser Cutting
  - Cut-to-Size Plastic Sheets
  - Injection Molding
  - Plastic Bending
  - Plastic Welding
  - Surface Finishing
- Materials
  - ABS
  - Polycarbonate PC
  - Nylon PA
  - POM / Acetal
  - PEEK
  - PTFE
  - PVC
  - HDPE
  - PP
  - Acrylic PMMA
- Products
  - Plastic Sheets
  - Plastic Rods
  - Plastic Films
  - Custom Plastic Parts
- Industries
  - Automotive
  - Medical Devices
  - Electronics
  - Aerospace
  - Industrial Equipment
  - Food Processing
- Blog / Knowledge Center
- About Us
- Request a Quote
- Contact

## Edit Brand and SEO

Global company details, navigation, page content, SEO descriptions, sitemap routes, and FAQ content live in:

```txt
lib/site.ts
```

The generated sitemap and robots routes are:

```txt
app/sitemap.ts
app/robots.ts
```

Production domain is set in `lib/site.ts`:

```txt
https://apexpolyworks.com
```
