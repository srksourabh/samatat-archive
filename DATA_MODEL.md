# Firestore Data Model for Samatat Theatre Archive

This document outlines the Firestore schema, including collections, field definitions, and sample documents for the Samatat Theatre Archive project.

## 1. `pages`
Static or semi-static content pages for the website.

**Fields:**
- `slug` (string): URL-friendly identifier (ID).
- `title` (string): Page title.
- `content_markdown` (string): Body content in Markdown.
- `hero_media_ref` (reference): Reference to a `media` document.
- `published` (boolean): Visibility status.
- `updatedAt` (timestamp): Last modification date.

**Samples:**
```json
// pages/about-us
{
  "slug": "about-us",
  "title": "About Samatat",
  "content_markdown": "# Our History\nSamatat Theatre was founded in 1998...",
  "hero_media_ref": "media/hero-about-01",
  "published": true,
  "updatedAt": "2023-10-27T10:00:00Z"
}

// pages/contact
{
  "slug": "contact",
  "title": "Contact Us",
  "content_markdown": "Reach us at contact@samatat.org or visit our studio...",
  "hero_media_ref": "media/hero-contact-01",
  "published": true,
  "updatedAt": "2023-09-15T14:30:00Z"
}

// pages/support
{
  "slug": "support",
  "title": "Support the Arts",
  "content_markdown": "Your donations help us keep the curtain rising...",
  "hero_media_ref": "media/hero-support-01",
  "published": true,
  "updatedAt": "2024-01-10T09:15:00Z"
}
```

## 2. `productions`
The core theatrical works produced by the group.

**Fields:**
- `title` (string)
- `year` (number)
- `seasonId` (string): e.g., "1998-1999"
- `synopsis` (string)
- `credits` (array of objects): `[{ role, name, photo_ref }]`
- `mediaRefs` (array of references): References to `media` docs.
- `tags` (array of strings): Genre, style, etc.
- `duration` (number): Minutes.
- `language` (string)

**Samples:**
```json
// productions/prod-001
{
  "title": "The First Dawn",
  "year": 1998,
  "seasonId": "1998-1999",
  "synopsis": "An experimental play about new beginnings.",
  "credits": [
    { "role": "Director", "name": "Rahim Khan", "photo_ref": "media/p-rahim-98" },
    { "role": "Lead Actor", "name": "Sarah Ahmed", "photo_ref": "media/p-sarah-98" }
  ],
  "mediaRefs": ["media/img-dawn-01", "media/vid-dawn-full"],
  "tags": ["Drama", "Experimental"],
  "duration": 90,
  "language": "Bengali"
}

// productions/prod-015
{
  "title": "Midsummer Night's Dream",
  "year": 2010,
  "seasonId": "2010-2011",
  "synopsis": "A localized adaptation of the Shakespeare classic.",
  "credits": [
    { "role": "Director", "name": "Anita Roy", "photo_ref": "media/p-anita-10" }
  ],
  "mediaRefs": ["media/img-dream-01", "media/img-dream-02"],
  "tags": ["Comedy", "Classic"],
  "duration": 120,
  "language": "English/Bengali"
}

// productions/prod-030
{
  "title": "Echoes of the River",
  "year": 2023,
  "seasonId": "2023-2024",
  "synopsis": "A musical journey through the river delta's history.",
  "credits": [
    { "role": "Composer", "name": "Deepak Das", "photo_ref": null }
  ],
  "mediaRefs": ["media/poster-river-23"],
  "tags": ["Musical", "Historical"],
  "duration": 110,
  "language": "Bengali"
}
```

## 3. `festivals`
Events hosted or participated in by the group.

**Fields:**
- `title` (string)
- `year` (number)
- `dates` (object): `{ start: timestamp, end: timestamp }`
- `productions` (array of references): Refs to `productions`.
- `sponsors` (array of strings)
- `summary` (string)
- `hero_media_ref` (reference)

**Samples:**
```json
// festivals/fest-2005
{
  "title": "National Theatre Fest 2005",
  "year": 2005,
  "dates": { "start": "2005-02-10", "end": "2005-02-20" },
  "productions": ["productions/prod-005", "productions/prod-006"],
  "sponsors": ["City Bank", "Arts Council"],
  "summary": "A 10-day celebration of regional theatre.",
  "hero_media_ref": "media/fest-2005-cover"
}

// festivals/fest-2015
{
  "title": "Samatat Silver Jubilee",
  "year": 2023,
  "dates": { "start": "2023-11-01", "end": "2023-11-05" },
  "productions": ["productions/prod-030"],
  "sponsors": ["Grameenphone"],
  "summary": "Celebrating 25 years of excellence.",
  "hero_media_ref": "media/fest-jubilee-hero"
}

// festivals/fest-2018
{
  "title": "Street Theatre Week",
  "year": 2018,
  "dates": { "start": "2018-01-15", "end": "2018-01-21" },
  "productions": [],
  "sponsors": ["Local Municipality"],
  "summary": "Bringing theatre to the people.",
  "hero_media_ref": "media/fest-street-18"
}
```

## 4. `workshops`
Educational events.

**Fields:**
- `title` (string)
- `year` (number)
- `description` (string)
- `instructors` (array of strings)
- `attendees_count` (number)
- `materialsRefs` (array of references): PDF or resource links.

**Samples:**
```json
// workshops/ws-001
{
  "title": "Acting 101",
  "year": 2000,
  "description": "Introduction to stage acting.",
  "instructors": ["Rahim Khan"],
  "attendees_count": 25,
  "materialsRefs": ["media/pdf-acting-101"]
}

// workshops/ws-012
{
  "title": "Lighting Design Masterclass",
  "year": 2015,
  "description": "Advanced techniques in stage lighting.",
  "instructors": ["External Expert A"],
  "attendees_count": 10,
  "materialsRefs": []
}

// workshops/ws-020
{
  "title": "Playwriting Workshop",
  "year": 2022,
  "description": "From idea to script.",
  "instructors": ["Sarah Ahmed"],
  "attendees_count": 15,
  "materialsRefs": ["media/pdf-script-template"]
}
```

## 5. `archive_entries`
General archive items linking different entities.

**Fields:**
- `type` (enum): "production", "festival", "workshop", "other"
- `year` (number)
- `title` (string)
- `description` (string)
- `mediaRefs` (array of references)
- `documentsRefs` (array of references)
- `keywords` (array of strings)

**Samples:**
```json
// archive_entries/arch-001
{
  "type": "other",
  "year": 1999,
  "title": "Clubhouse Inauguration",
  "description": "Opening ceremony of our first permanent rehearsal space.",
  "mediaRefs": ["media/img-club-99"],
  "documentsRefs": ["media/doc-lease-99"],
  "keywords": ["history", "venue"]
}

// archive_entries/arch-002
{
  "type": "production",
  "year": 2001,
  "title": "The First Dawn - Script Drafts",
  "description": "Original handwritten scripts.",
  "mediaRefs": [],
  "documentsRefs": ["media/doc-script-draft-1"],
  "keywords": ["script", "manuscript"]
}

// archive_entries/arch-003
{
  "type": "festival",
  "year": 2012,
  "title": "Press Coverage 2012",
  "description": "Newspaper clippings from the 2012 season.",
  "mediaRefs": ["media/img-press-12-1", "media/img-press-12-2"],
  "documentsRefs": [],
  "keywords": ["press", "media"]
}
```

## 6. `media`
Metadata for files stored in Firebase Storage.

**Fields:**
- `path` (string): Storage path.
- `storageRef` (string): Full gs:// path.
- `type` (enum): "image", "video", "poster", "pdf"
- `width` (number, optional)
- `height` (number, optional)
- `duration` (number, optional)
- `thumbnailRef` (string, optional)
- `alt_text` (string)
- `caption` (string)
- `indexedTags` (array of strings)

**Samples:**
```json
// media/img-dawn-01
{
  "path": "images/1998/dawn_01.jpg",
  "storageRef": "gs://bucket/images/1998/dawn_01.jpg",
  "type": "image",
  "width": 1920,
  "height": 1080,
  "alt_text": "Scene from The First Dawn",
  "caption": "Opening scene, 1998.",
  "indexedTags": ["1998", "production", "stage"]
}

// media/vid-dawn-full
{
  "path": "videos/1998/dawn_full.mp4",
  "storageRef": "gs://bucket/videos/1998/dawn_full.mp4",
  "type": "video",
  "duration": 5400,
  "thumbnailRef": "media/img-dawn-thumb",
  "alt_text": "Full recording of The First Dawn",
  "caption": "Digitized from VHS.",
  "indexedTags": ["1998", "full-play"]
}

// media/doc-script-draft-1
{
  "path": "docs/1998/script_v1.pdf",
  "storageRef": "gs://bucket/docs/1998/script_v1.pdf",
  "type": "pdf",
  "alt_text": "Script PDF",
  "caption": "Scanned draft.",
  "indexedTags": ["script"]
}
```

## 7. `team`
Current and past members.

**Fields:**
- `name` (string)
- `role` (string)
- `bio` (string)
- `photoRef` (reference)
- `joinedYear` (number)
- `alumni` (boolean)

**Samples:**
```json
// team/mem-001
{
  "name": "Rahim Khan",
  "role": "Artistic Director",
  "bio": "Founder of Samatat...",
  "photoRef": "media/headshot-rahim",
  "joinedYear": 1998,
  "alumni": false
}

// team/mem-050
{
  "name": "Lisa Ray",
  "role": "Stage Manager",
  "bio": "Managed 10 productions...",
  "photoRef": "media/headshot-lisa",
  "joinedYear": 2015,
  "alumni": true
}

// team/mem-102
{
  "name": "Karim Uddin",
  "role": "Actor",
  "bio": "Joined in 2020...",
  "photoRef": "media/headshot-karim",
  "joinedYear": 2020,
  "alumni": false
}
```

## 8. `committees`
Executive committee records.

**Fields:**
- `year` (number)
- `members` (array of objects): `[{ name, role }]`
- `minutesPdfRef` (reference)

**Samples:**
```json
// committees/ec-2023
{
  "year": 2023,
  "members": [
    { "name": "Rahim Khan", "role": "President" },
    { "name": "Sarah Ahmed", "role": "Secretary" }
  ],
  "minutesPdfRef": "media/doc-minutes-2023"
}

// committees/ec-2022
{
  "year": 2022,
  "members": [
    { "name": "Rahim Khan", "role": "President" },
    { "name": "John Doe", "role": "Treasurer" }
  ],
  "minutesPdfRef": "media/doc-minutes-2022"
}

// committees/ec-2021
{
  "year": 2021,
  "members": [
    { "name": "Rahim Khan", "role": "President" }
  ],
  "minutesPdfRef": null
}
```

## 9. `tickets`
Ticket sales.

**Fields:**
- `orderId` (string)
- `productionRef` (reference)
- `userRef` (reference)
- `seats` (array of strings): Seat numbers.
- `amount` (number)
- `status` (enum): "paid", "pending", "cancelled"
- `createdAt` (timestamp)

**Samples:**
```json
// tickets/ord-001
{
  "orderId": "ORD-12345",
  "productionRef": "productions/prod-030",
  "userRef": "users/u-001",
  "seats": ["A1", "A2"],
  "amount": 500,
  "status": "paid",
  "createdAt": "2023-11-01T10:00:00Z"
}

// tickets/ord-002
{
  "orderId": "ORD-67890",
  "productionRef": "productions/prod-030",
  "userRef": "users/u-050",
  "seats": ["B5"],
  "amount": 250,
  "status": "pending",
  "createdAt": "2023-11-02T12:00:00Z"
}

// tickets/ord-003
{
  "orderId": "ORD-11111",
  "productionRef": "productions/prod-030",
  "userRef": null,
  "seats": ["C1", "C2", "C3"],
  "amount": 750,
  "status": "paid",
  "createdAt": "2023-11-03T09:30:00Z"
}
```

## 10. `members`
Registered members/subscribers.

**Fields:**
- `userRef` (reference)
- `tier` (string): "standard", "patron", "student"
- `startsAt` (timestamp)
- `benefits` (array of strings)

**Samples:**
```json
// members/mem-u001
{
  "userRef": "users/u-001",
  "tier": "patron",
  "startsAt": "2023-01-01T00:00:00Z",
  "benefits": ["priority_seating", "meet_greet"]
}

// members/mem-u020
{
  "userRef": "users/u-020",
  "tier": "student",
  "startsAt": "2023-06-01T00:00:00Z",
  "benefits": ["discounted_tickets"]
}

// members/mem-u099
{
  "userRef": "users/u-099",
  "tier": "standard",
  "startsAt": "2022-01-01T00:00:00Z",
  "benefits": []
}
```

## 11. `donations`
Donation records.

**Fields:**
- `donorName` (string)
- `amount` (number)
- `method` (string)
- `receiptRef` (reference)
- `purpose` (string)

**Samples:**
```json
// donations/don-001
{
  "donorName": "Anonymous",
  "amount": 10000,
  "method": "Bank Transfer",
  "receiptRef": "media/receipt-001",
  "purpose": "General Fund"
}

// donations/don-002
{
  "donorName": "Alice Smith",
  "amount": 5000,
  "method": "Credit Card",
  "receiptRef": "media/receipt-002",
  "purpose": "New Lighting Equipment"
}

// donations/don-003
{
  "donorName": "Tech Corp",
  "amount": 50000,
  "method": "Cheque",
  "receiptRef": "media/receipt-003",
  "purpose": "Festival Sponsor"
}
```

## 12. `testimonials`
Audience or press reviews.

**Fields:**
- `author` (string)
- `content` (string)
- `productionRef` (reference, optional)
- `date` (timestamp)
- `rating` (number, optional)

**Samples:**
```json
// testimonials/test-001
{
  "author": "Daily News",
  "content": "A riveting performance...",
  "productionRef": "productions/prod-030",
  "date": "2023-11-05",
  "rating": 5
}

// testimonials/test-002
{
  "author": "Audience Member",
  "content": "Loved the lighting!",
  "productionRef": "productions/prod-030",
  "date": "2023-11-06",
  "rating": 4
}

// testimonials/test-003
{
  "author": "Theatre Blog",
  "content": "A must-see for history buffs.",
  "productionRef": null,
  "date": "2023-11-07",
  "rating": 4.5
}
```

## 13. `sponsors`
Corporate or individual sponsors.

**Fields:**
- `name` (string)
- `logoRef` (reference)
- `website` (string)
- `tier` (string): "gold", "silver", "bronze"

**Samples:**
```json
// sponsors/sp-001
{
  "name": "City Bank",
  "logoRef": "media/logo-citybank",
  "website": "https://citybank.com",
  "tier": "gold"
}

// sponsors/sp-002
{
  "name": "Local Coffee Shop",
  "logoRef": "media/logo-coffee",
  "website": "https://localcoffee.com",
  "tier": "bronze"
}

// sponsors/sp-003
{
  "name": "Tech Solutions",
  "logoRef": "media/logo-tech",
  "website": "https://techsolutions.com",
  "tier": "silver"
}
```

## 14. `news`
News and updates.

**Fields:**
- `title` (string)
- `slug` (string)
- `summary` (string)
- `content` (string)
- `publishedAt` (timestamp)
- `author` (string)

**Samples:**
```json
// news/news-001
{
  "title": "Season 2024 Announced",
  "slug": "season-2024-announced",
  "summary": "Check out our upcoming lineup.",
  "content": "We are thrilled to announce...",
  "publishedAt": "2023-12-01T10:00:00Z",
  "author": "Admin"
}

// news/news-002
{
  "title": "Workshop Registration Open",
  "slug": "workshop-registration-open",
  "summary": "Sign up for acting classes now.",
  "content": "Seats are limited...",
  "publishedAt": "2024-01-05T09:00:00Z",
  "author": "Admin"
}

// news/news-003
{
  "title": "Samatat Wins Award",
  "slug": "samatat-wins-award",
  "summary": "Best production of the year.",
  "content": "We are humbled to receive...",
  "publishedAt": "2024-02-15T14:00:00Z",
  "author": "Admin"
}
```

## 15. `statutory`
Legal and compliance documents.

**Fields:**
- `title` (string)
- `type` (enum): "constitution", "policy", "report"
- `docRef` (reference)
- `effectiveDate` (timestamp)

**Samples:**
```json
// statutory/stat-001
{
  "title": "Constitution 1998",
  "type": "constitution",
  "docRef": "media/doc-const-98",
  "effectiveDate": "1998-01-01"
}

// statutory/stat-002
{
  "title": "Child Protection Policy",
  "type": "policy",
  "docRef": "media/doc-cpp-2020",
  "effectiveDate": "2020-01-01"
}

// statutory/stat-003
{
  "title": "Annual Report 2023",
  "type": "report",
  "docRef": "media/doc-report-23",
  "effectiveDate": "2024-03-01"
}
```
