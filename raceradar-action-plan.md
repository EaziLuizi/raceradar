# RaceRadar - Your First Month Action Plan

## 🎯 Goal: Launch MVP in 4 Weeks

By the end of Week 4, you'll have:
- ✅ Live website at raceradar.co.za
- ✅ 50+ races in database
- ✅ Working search and filters
- ✅ User accounts (sign up/login)
- ✅ Race bookmarking
- ✅ 5 published race guides
- ✅ First 100 users

---

## Week 1: Foundation (Nov 4-10, 2025)

### Monday Evening (2 hours)
**Setup Day**
- [x] Register raceradar.co.za domain (15 min)
- [x] Create GitHub account (if needed) and repository (15 min)
- [x] Install Node.js, VS Code, Git (30 min)
- [x] Create Next.js project following the setup guide (45 min)
- [x] Push to GitHub (15 min)

**Files to use:**
- `raceradar-setup-guide.md` (follow steps 1-8)

### Tuesday Evening (2 hours)
**Database Setup**
- [x] Create Supabase account and project (20 min)
- [x] Run database schema SQL (10 min)
- [x] Test connection from Next.js (30 min)
- [x] Add first 5 races manually using seed data (45 min)
- [x] Verify races appear in Supabase dashboard (15 min)

**Files to use:**
- `raceradar-setup-guide.md` (Steps 4-5)
- `raceradar-seed-data.sql`

### Wednesday Evening (2 hours)
**Landing Page**
- [x] Copy landing page code to src/app/page.tsx (15 min)
- [x] Install lucide-react icons: `npm install lucide-react` (5 min)
- [x] Run dev server: `npm run dev` (2 min)
- [x] View landing page at localhost:3000 (5 min)
- [x] Customize colors, text to your liking (60 min)
- [x] Take screenshots for your notes (5 min)
- [x] Push to GitHub (5 min)

**Files to use:**
- `raceradar-landing-page.tsx`

### Thursday Evening (2 hours)
**Races Listing Page**
- [ ] Copy races page code to src/app/races/page.tsx (15 min)
- [ ] Create lib/supabase.ts client file (10 min)
- [ ] Test races page at localhost:3000/races (10 min)
- [ ] Add 10 more races to database (60 min)
- [ ] Test filters and search (15 min)
- [ ] Push to GitHub (5 min)

**Files to use:**
- `raceradar-races-page.tsx`
- `raceradar-seed-data.sql` (add more races)

### Friday Evening (2 hours)
**Race Detail Page (Simple Version)**
- [ ] Create src/app/races/[slug]/page.tsx
- [ ] Fetch single race by slug from Supabase
- [ ] Display race name, date, location, description
- [ ] Add "Book Now" button (link to external site)
- [ ] Test with a few races
- [ ] Push to GitHub

**No file provided - build this yourself! You've got this.**

### Weekend (4-6 hours)
**Deploy & Polish**
- [ ] Deploy to Vercel (30 min)
- [ ] Point domain to Vercel (30 min)
- [ ] Add remaining 15 races from seed data (90 min)
- [ ] Take screenshots of your site (15 min)
- [ ] Share with 5 friends for feedback (2+ hours)
- [ ] Make any quick fixes based on feedback (60 min)

**By Sunday night:** You have a live website with 30+ races! 🎉

---

## Week 2: User Accounts & Core Features (Nov 11-17)

### Monday-Tuesday Evenings (4 hours total)
**Authentication Setup**
- [ ] Set up Supabase Auth
- [ ] Create login page (src/app/login/page.tsx)
- [ ] Create signup page (src/app/signup/page.tsx)
- [ ] Add auth context/hooks
- [ ] Test login/signup flow
- [ ] Add "Sign Out" button to header

**Resources:**
- Supabase Auth docs: https://supabase.com/docs/guides/auth

### Wednesday-Thursday Evenings (4 hours total)
**Race Bookmarking**
- [ ] Add "Save Race" button to race cards
- [ ] Create profile page showing saved races
- [ ] Add "My Races" section
- [ ] Allow users to mark races as "Interested", "Registered", "Completed"
- [ ] Test bookmarking flow

### Friday Evening (2 hours)
**Race Reviews (Basic)**
- [ ] Add review form to race detail page
- [ ] Display reviews on race detail page
- [ ] Calculate average rating
- [ ] Test review submission

### Weekend (4 hours)
**Content Creation**
- [ ] Write 3 race guides (1-2 hours each)
  - "Best Trail Runs in Western Cape"
  - "Beginner's Guide to Your First Half Marathon"
  - "How to Prepare for Two Oceans"
- [ ] Set up blog structure in Next.js
- [ ] Publish guides to blog
- [ ] Share on social media

---

## Week 3: Polish & Growth (Nov 18-24)

### Monday-Tuesday Evenings (4 hours)
**Email System Setup**
- [ ] Set up Resend account
- [ ] Create welcome email template
- [ ] Create weekly race digest template
- [ ] Test email sending
- [ ] Set up automated welcome email on signup

### Wednesday-Thursday Evenings (4 hours)
**SEO Optimization**
- [ ] Add meta tags to all pages
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Optimize page titles and descriptions
- [ ] Add Open Graph images
- [ ] Test with Lighthouse

### Friday Evening (2 hours)
**Analytics Setup**
- [ ] Add PostHog or Plausible Analytics
- [ ] Track key events (page views, signups, bookmarks)
- [ ] Set up conversion tracking
- [ ] Create basic dashboard

### Weekend (6 hours)
**Soft Launch Campaign**
- [ ] Create social media accounts (Twitter, Facebook, Instagram)
- [ ] Design launch graphics
- [ ] Write launch announcement
- [ ] Post in SA running/cycling Facebook groups (10+)
- [ ] Email 20 friends personally
- [ ] Post on your personal social media
- [ ] Monitor signups and engagement

**Goal: 50 signups by end of weekend**

---

## Week 4: Community Building & Iteration (Nov 25-30)

### Monday-Wednesday (6 hours)
**Based on User Feedback**
- [ ] Fix top 3 bugs/issues reported
- [ ] Add top 2 requested features (keep them small!)
- [ ] Improve mobile responsiveness
- [ ] Optimize loading speed

### Thursday-Friday (4 hours)
**Content Push**
- [ ] Write 2 more race guides
- [ ] Create "Featured Races" section on homepage
- [ ] Add "Upcoming This Weekend" widget
- [ ] Send first email newsletter to all users

### Weekend (4 hours)
**Race Organizer Outreach**
- [ ] Create simple "Submit Your Race" form
- [ ] Email 10 race organizers introducing RaceRadar
- [ ] Offer free featured placement for first 10
- [ ] Add any races they provide

**Goal by end of Week 4:**
- 100+ users registered
- 75+ races in database
- 10+ race reviews
- 5+ race organizers aware of platform
- First organic Google traffic

---

## After Month 1: What's Next?

### Month 2-3 Goals:
- [ ] Reach 500 users
- [ ] 150+ races
- [ ] Partner with 5 race organizers
- [ ] Launch premium features (race recommendations, training plans)
- [ ] Begin testing monetization (featured placements)

### Month 4-6 Goals:
- [ ] 2,000+ users
- [ ] Build payment integration (for future race entries)
- [ ] Launch mobile app (React Native)
- [ ] Hire first contractor (part-time content writer)

### Month 7-12 Goals:
- [ ] 10,000+ users
- [ ] Process first race entries through platform
- [ ] Generate R10,000+ MRR
- [ ] Evaluate: Can I quit my job?

---

## Time Investment Breakdown

**Week 1:** 12-14 hours
**Week 2:** 14-16 hours
**Week 3:** 16-18 hours
**Week 4:** 14-16 hours

**Monthly Average:** 15 hours/week = 2 hours/weeknight + 5 hours/weekend

**This is achievable with your full-time job!**

---

## Critical Success Factors

### 1. **Ship Fast, Iterate Faster**
Don't build features nobody asked for. Launch with basics, then improve based on real user feedback.

### 2. **Content is King**
Race guides drive SEO. 1 guide/week = 52 guides/year = massive organic traffic.

### 3. **Community First**
Users who feel part of something will evangelize for you. Respond to every piece of feedback.

### 4. **Talk to Race Organizers**
They're your B2B customers. Understanding their pain = building the right features.

### 5. **Measure Everything**
Track signups, active users, races viewed, bookmarks made. Data drives decisions.

---

## Emergency Contacts (When You're Stuck)

**Technical Issues:**
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- Vercel Docs: https://vercel.com/docs
- Stack Overflow (search first!)

**Design Inspiration:**
- Strava.com
- Parkrun.com
- Active.com
- Raceid.com

**When Overwhelmed:**
Remember: You're building this for YOU. Build what you wish existed when you were looking for your next race.

---

## Weekly Review Questions

Ask yourself every Sunday:
1. Did I ship something this week?
2. Did I get closer to launch?
3. What blocked me? How can I avoid it next week?
4. What's the ONE thing I must finish next week?
5. Am I still excited about this? (If no, pivot or pause)

---

## Resources You've Been Given

1. **raceradar-setup-guide.md** - Complete technical setup
2. **raceradar-seed-data.sql** - 20 real SA races to start with
3. **raceradar-landing-page.tsx** - Beautiful landing page
4. **raceradar-races-page.tsx** - Full race listing with filters

**You have everything you need to start building TONIGHT.**

---

## Your First Task (Right Now!)

1. Open terminal
2. Create project folder: `mkdir ~/Projects && cd ~/Projects`
3. Create Next.js app: `npx create-next-app@latest raceradar`
4. Open in VS Code: `code raceradar`
5. Message me: "Just created the project. What's next?"

**Don't overthink it. Just start.**

---

## Remember

"The best time to plant a tree was 20 years ago. The second best time is now."

You've got:
- ✅ The idea (RaceRadar)
- ✅ The passion (racing)
- ✅ The skills (software development)
- ✅ The plan (this document)
- ✅ The tools (Claude, GitHub Copilot)
- ✅ The time (evenings and weekends)

**What are you waiting for?** 🚀

Let's build something thousands of South African athletes will love.

---

**See you at the start line.**

*- Your RaceRadar Build Plan*
