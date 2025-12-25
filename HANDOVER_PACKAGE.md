# Handover Package for Samatat Theatre Archive Staff

This document provides step-by-step guides, video scripts, and emergency procedures for managing the website and archive.

---

## 1. Quick Reference Guides (Printable)

### A. Publish a New Show
1.  **Login** to the Admin CMS at `/admin`.
2.  Navigate to **Productions** in the sidebar.
3.  Click **"New Production"**.
4.  Fill in the **Title**, **Year**, and **Synopsis**.
5.  In the **Credits** section, click "Add Person" to list Director, Cast, and Crew.
6.  Click **"Select Media"** to choose a poster image from the library.
7.  Toggle the **"Published"** switch to ON (Green).
8.  Click **"Save"**. *The show is now live on the website.*

### B. Upload Photos/Videos
1.  Go to **Media Library**.
2.  Drag and drop your files into the upload zone (or click to browse).
3.  *Wait for the progress bar to complete.*
4.  Click on an uploaded image to edit details.
5.  **Important**: Check the "Auto-Generated Alt Text" and edit if needed for accuracy.
6.  Add a **Caption** (e.g., "Year - Play Name - Photographer").
7.  Click **"Save Metadata"**.

### C. Run Bulk Import (Archives)
1.  Prepare your **CSV file** (columns: title, year, description) and **ZIP file** (photos).
2.  Go to the **Import** tab.
3.  Upload the CSV first. The system will show a "Validation Report".
4.  If valid, upload the ZIP file.
5.  Click **"Start Import"**.
6.  *Do not close the tab until the "Complete" message appears.*

### D. Refund a Ticket
1.  Go to **Orders / Ticketing**.
2.  Search for the **Order ID** or **Customer Email**.
3.  Open the order details.
4.  Click the red **"Refund"** button.
5.  Select **"Full Refund"** or enter a partial amount.
6.  Confirm the action. *The customer will receive an email automatically.*

### E. Create a Grant Pack
1.  Go to the **Impact Portal**.
2.  Check the boxes next to the programs you want to highlight (e.g., "Street Workshop 2023").
3.  In the sidebar, toggle **"Include Financials"** if required.
4.  Enter a title (e.g., "Arts Council Application").
5.  Click **"Generate PDF"**.
6.  Download the file once the link appears.

---

## 2. Emergency Checklist (One-Pager)

**Print this and tape it to the Box Office desk.**

### 🚨 SITE IS DOWN (Blank screen or Error 500)
1.  **Check your internet** connection first.
2.  **Hard Refresh**: Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac).
3.  **Check Status**: Visit `status.firebase.google.com` to see if Google is down.
4.  **Contact Developer**:
    *   **Name**: [Dev Name]
    *   **Phone**: [Dev Phone]
    *   **Email**: [Dev Email]

### 🚨 PAYMENTS FAILING (Customers can't book)
1.  **Switch to WhatsApp Mode**:
    *   Log in to Admin.
    *   Go to **Settings > Ticketing**.
    *   Toggle **"Enable WhatsApp Fallback"** to ON.
    *   *This replaces the "Pay" button with "Book via WhatsApp".*
2.  **Check Stripe**: Log in to `dashboard.stripe.com` to see if there are alerts.
3.  **Manual Booking**:
    *   Take cash/UPI from the customer.
    *   Go to **Admin > Orders > New Order**.
    *   Manually select seats and mark as **"Paid (Cash)"**.

### 🚨 WRONG INFO PUBLISHED
1.  Go to the relevant page in Admin (Production/News).
2.  **Unpublish**: Toggle "Published" to OFF immediately.
3.  **Edit**: Fix the text.
4.  **Republish**.

---

## 3. Screencast Scripts (90 Seconds Each)

### Video 1: Publishing a Production
*   **Visual**: Screen recording of Admin Dashboard.
*   **Audio**: "Welcome. Today we'll add a new show. Start by clicking 'Productions' on the left. Click 'New'. Enter the title 'The Red Curtain'. For the slug, just click the magic wand icon to auto-fill it. Add the year and a short synopsis. Down here in credits, add your Director. Now, the most important part: The Poster. Click 'Select Media', pick your image, and hit confirm. Finally, flip this 'Published' switch to green and hit Save. Let's check the live site... and there it is!"

### Video 2: Media Management
*   **Visual**: Dragging files into Media Library.
*   **Audio**: "Let's organize our archive. Go to 'Media'. Simply drag your photos here. Watch them turn green as they upload. Click on this photo. Notice the 'Smart Text'? The AI has already described the scene for blind users, but you can tweak it. Add the year and photographer name here. This helps the search bar find it later. If you upload a video, it will take a few minutes to process a trailer. Once done, hit 'Save'."

### Video 3: Bulk Import Tool
*   **Visual**: Excel sheet -> Zip file -> Import Interface.
*   **Audio**: "Got 20 years of data? Don't type it manually. Use the Bulk Import. First, make sure your Excel sheet matches our template—Title, Year, Description. Save it as CSV. Now, zip your photos together. In the dashboard, go to 'Import'. Upload the CSV. Look at this validation report—all green means good. Now upload the Zip. Click 'Start'. You'll see the progress bar moving. 500 records... done! Check the 'Productions' tab to see them all populated."

### Video 4: Ticketing & Refunds
*   **Visual**: Seat Map -> Order List -> Refund Modal.
*   **Audio**: "Managing the box office. When a customer calls to cancel, go to 'Orders'. Search their email. Here's the order. You can see they bought seats A1 and A2. Click the red 'Refund' button. You can do a partial refund if it's a policy, or full. Let's do full. Click 'Confirm'. The system instantly tells Stripe to send the money back and frees up seat A1 and A2 on the map for someone else to buy."

### Video 5: Grant Pack Generator
*   **Visual**: Impact Portal -> PDF Generation.
*   **Audio**: "Need a report for a sponsor? Go to 'Impact'. Here are all our workshops and shows. Select the ones you want to brag about—let's pick the 'Street Children Workshop' and 'Annual Festival'. On the right, give it a title like 'CSR Report 2024'. Toggle 'Include Financials' if the donor needs to see costs. Click 'Generate'. In a few seconds, you get a professional PDF with photos, stats, and our logo, ready to email."

### Video 6: Managing Homepage & News
*   **Visual**: Homepage Edit Screen -> Frontend.
*   **Audio**: "Keep the homepage fresh. Go to 'Pages' and select 'Home'. Here you can change the Hero headline. Let's change it to 'Season 2025 is Here'. You can also swap the background video by picking a new one from Media. Down here, select which 'Featured Show' appears next to the 'Buy Ticket' button. Update the 'Latest News' section by simply posting a new article in the 'News' tab—it shows up here automatically. Hit Save, and your homepage is updated."
