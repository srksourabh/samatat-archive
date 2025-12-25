# Sponsor Portal & Pitch Suite

This document contains the copy and templates for the Sponsor Portal, tailored email pitches, and a printable one-page summary.

## 1. Web Portal Copy

### Headline & Intro
**Headline:** "Align Your Brand with 26 Years of Cultural Excellence."
**Subhead:** "Partner with Samatat Theatre to preserve history, empower artists, and engage a diverse community."

### Reach Metrics (The "Why Us")
*   **Legacy:** 26 Years of continuous operation.
*   **Reach:** 50,000+ Annual audience members across live shows and digital channels.
*   **Impact:** 2,000+ Students trained in free workshops.
*   **Archive:** 500+ Hours of digitized cultural history.

### Sponsorship Benefits
1.  **Brand Visibility:** Logo placement on tickets, posters, website footer, and pre-show projection screens.
2.  **CSR Fulfillment:** Direct contribution to education and cultural preservation goals.
3.  **Exclusive Access:** VIP seating, backstage tours, and private shows for your employees/clients.
4.  **Digital Footprint:** Permanent recognition in our globally accessible Digital Archive.

### Case Study: "The Silver Jubilee Festival"
> "In partnership with [Previous Sponsor], Samatat Theatre hosted a 5-day festival attracting 10,000 visitors. The sponsor received prime branding on 50+ billboards city-wide and a dedicated 'Community Corner' at the venue, resulting in high local engagement."

---

## 2. Email Pitch Templates

### Option A: Corporate CSR (Formal)
**Subject:** Partnership Opportunity: Cultural Preservation & Education with Samatat Theatre

Dear [Name],

I am writing to introduce **Samatat Theatre**, a premier cultural institution serving our community for 26 years. We admire [Company Name]'s commitment to [mention their specific CSR focus, e.g., education/community building].

We are launching our new **Digital Archive & Education Initiative**, a project designed to digitize 3 decades of history and provide free arts training to underprivileged youth. We believe this aligns perfectly with your CSR goals.

**Why Partner with Us?**
*   **Proven Impact:** We have trained over 2,000 students.
*   **Visibility:** Your brand will be showcased to our 50,000+ annual audience.
*   **Legacy:** Support the preservation of tangible cultural heritage.

I have attached a one-page overview of the opportunity. I would welcome a brief call next week to discuss how we can tailor a partnership to your needs.

Sincerely,

[Your Name]
Director, Samatat Theatre

### Option B: Cultural Patron (Warm/Personal)
**Subject:** An Invitation: Become a Guardian of Our Story

Dear [Name],

Theatre is ephemeral—it exists for a moment and then vanishes. For 26 years, Samatat Theatre has been creating these magic moments. Now, we are embarking on a mission to make them last forever.

We are building a **Living Archive** to preserve our region's artistic history, and we are looking for a select group of visionary patrons to lead this charge.

This isn't just about sponsorship; it's about stewardship. As a Patron Partner, you will enable us to digitize rare footage and fund the next generation of storytellers. In return, we offer you a front-row seat to the creation of art—from private rehearsals to gala dinners.

Join us in keeping the curtain rising.

Warmly,

[Your Name]
Samatat Theatre

---

## 3. One-Page Pitch (HTML/CSS Template)

This template is designed to be saved as an HTML file and printed to PDF (or generated via the Puppeteer function).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Samatat Theatre Sponsorship One-Pager</title>
    <style>
        @page { size: A4; margin: 0; }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background: #fff;
            -webkit-print-color-adjust: exact;
        }
        .header {
            background-color: #1a202c; /* Dark Slate */
            color: #fff;
            padding: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 { margin: 0; font-size: 32px; text-transform: uppercase; letter-spacing: 2px; }
        .header p { margin: 5px 0 0; opacity: 0.8; font-size: 14px; }
        
        .container {
            display: flex;
            height: 900px; /* Approx A4 height minus header */
        }
        
        .left-col {
            width: 40%;
            background-color: #f7fafc;
            padding: 40px;
            border-right: 1px solid #e2e8f0;
        }
        
        .right-col {
            width: 60%;
            padding: 40px;
        }
        
        h2 { color: #2d3748; font-size: 18px; border-bottom: 2px solid #ed8936; padding-bottom: 10px; margin-top: 0; margin-bottom: 20px; text-transform: uppercase; }
        
        .stat-box {
            margin-bottom: 30px;
        }
        .stat-number { font-size: 36px; font-weight: bold; color: #ed8936; display: block; }
        .stat-label { font-size: 14px; font-weight: bold; text-transform: uppercase; color: #4a5568; }
        
        p { line-height: 1.6; font-size: 14px; color: #4a5568; margin-bottom: 20px; }
        
        .benefit-list { list-style: none; padding: 0; }
        .benefit-list li {
            margin-bottom: 15px;
            padding-left: 20px;
            position: relative;
            font-size: 14px;
        }
        .benefit-list li::before {
            content: "✓";
            color: #ed8936;
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        
        .tiers {
            margin-top: 30px;
            display: flex;
            gap: 15px;
        }
        .tier-box {
            flex: 1;
            border: 1px solid #cbd5e0;
            padding: 15px;
            border-radius: 4px;
            text-align: center;
        }
        .tier-name { font-weight: bold; color: #1a202c; display: block; margin-bottom: 5px; }
        .tier-price { color: #ed8936; font-weight: bold; }
        
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            background: #2d3748;
            color: #fff;
            text-align: center;
            padding: 15px 0;
            font-size: 12px;
        }
        
        .quote {
            font-style: italic;
            border-left: 3px solid #ed8936;
            padding-left: 15px;
            margin: 30px 0;
            color: #2d3748;
        }
    </style>
</head>
<body>

    <div class="header">
        <div>
            <h1>Samatat Theatre</h1>
            <p>Archive • Performance • Community</p>
        </div>
        <div style="text-align: right;">
            <p>Est. 1998</p>
        </div>
    </div>

    <div class="container">
        <!-- Left Column: The Story & Stats -->
        <div class="left-col">
            <h2>Our Story</h2>
            <p>For over two decades, Samatat Theatre has been the heartbeat of regional culture. We don't just put on plays; we build community, train youth, and preserve our shared history.</p>
            
            <div class="quote">
                "A beacon of artistic integrity and resilience." <br>
                <small>— Daily Arts Review</small>
            </div>

            <h2>Impact by the Numbers</h2>
            
            <div class="stat-box">
                <span class="stat-number">26</span>
                <span class="stat-label">Years of Excellence</span>
            </div>
            
            <div class="stat-box">
                <span class="stat-number">50,000+</span>
                <span class="stat-label">Annual Audience</span>
            </div>
            
            <div class="stat-box">
                <span class="stat-number">2,000+</span>
                <span class="stat-label">Students Trained</span>
            </div>
        </div>

        <!-- Right Column: The Offer -->
        <div class="right-col">
            <h2>Why Partner With Us?</h2>
            <p>Join us in our mission to digitize history and empower the next generation of artists. Your partnership offers direct access to a diverse, engaged audience and fulfills critical CSR objectives.</p>
            
            <ul class="benefit-list">
                <li><strong>Brand Visibility:</strong> Logo placement on all digital and print assets.</li>
                <li><strong>CSR Impact:</strong> Tax-deductible contributions supporting education.</li>
                <li><strong>Exclusive Access:</strong> VIP tickets and private backstage tours.</li>
                <li><strong>Permanent Legacy:</strong> Recognition in the Digital Archive.</li>
            </ul>

            <h2>Sponsorship Tiers</h2>
            <div class="tiers">
                <div class="tier-box">
                    <span class="tier-name">Supporter</span>
                    <span class="tier-price">₹50,000</span>
                </div>
                <div class="tier-box">
                    <span class="tier-name">Partner</span>
                    <span class="tier-price">₹2 Lakhs</span>
                </div>
                <div class="tier-box">
                    <span class="tier-name">Title Sponsor</span>
                    <span class="tier-price">₹10 Lakhs</span>
                </div>
            </div>

            <div style="margin-top: 40px; text-align: center;">
                <p style="font-weight: bold; margin-bottom: 5px;">Ready to make an impact?</p>
                <div style="background: #ed8936; color: white; padding: 10px 20px; display: inline-block; font-weight: bold;">
                    contact@samatat.org | +91 98765 43210
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        Samatat Theatre | Reg. Non-Profit No. 123456 | www.samatat.org
    </div>

</body>
</html>
```
