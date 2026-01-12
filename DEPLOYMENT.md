# 🚀 Deploy Global Cargo Inspection to Vercel

## Quick Deployment Guide

### Prerequisites
- ✅ Vercel account (free) - Sign up at https://vercel.com
- ✅ GitHub account
- ✅ Your Njalla domain

---

## Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `global-cargo-inspection`
   - Set to Public or Private (both work with Vercel free)
   - **DO NOT** initialize with README (we already have code)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/global-cargo-inspection.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import your `global-cargo-inspection` repository
   - Vercel will auto-detect Next.js settings ✅

3. **Configure:**
   - Project Name: `global-cargo-inspection` (or your preferred name)
   - Framework Preset: **Next.js** (should be auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build ⏱️
   - Your site will be live at `your-project.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# ? Set up and deploy? Yes
# ? Which scope? [Your account]
# ? Link to existing project? No
# ? What's your project's name? global-cargo-inspection
# ? In which directory is your code located? ./

# When ready for production:
vercel --prod
```

---

## Step 3: Connect Your Njalla Domain

### In Vercel Dashboard:

1. **Go to your project settings:**
   - Click on your project
   - Go to "Settings" → "Domains"

2. **Add your domain:**
   - Click "Add"
   - Enter your domain (e.g., `globalcargoinspection.com`)
   - Vercel will give you DNS records to configure

### In Njalla:

1. **Log in to Njalla:**
   - Go to your domain management

2. **Add DNS Records:**
   
   **For root domain (example.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Or use nameservers (recommended):**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

3. **Wait for DNS propagation:**
   - Usually takes 5-60 minutes
   - Can take up to 48 hours in rare cases
   - Check status at https://www.whatsmydns.net

---

## Step 4: Verify Deployment

### Check these URLs:

1. **Homepage:** `https://your-domain.com/`
2. **Services:** `https://your-domain.com/services`
3. **Case Studies:** `https://your-domain.com/case-studies`
4. **Industries:** `https://your-domain.com/industries`
5. **Blog:** `https://your-domain.com/blog`
6. **Contact:** `https://your-domain.com/contact`

---

## Environment Variables (None Required)

Your site doesn't use any environment variables currently, so no additional configuration is needed! 🎉

---

## Continuous Deployment

✅ **Auto-deploy is enabled by default!**

Every time you push to your `main` branch on GitHub, Vercel will automatically:
1. Build your site
2. Run tests (if you add them)
3. Deploy to production

### To update your site:

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Updated services page"
git push

# Vercel deploys automatically! ✨
```

---

## Troubleshooting

### Build Fails?

**Check Vercel logs:**
- Go to your project dashboard
- Click on the failed deployment
- View "Building" logs

**Common issues:**
- Missing dependencies → Run `npm install` locally first
- TypeScript errors → Fix locally with `npm run build`
- Image issues → Ensure all images are in `/public`

### Domain not connecting?

1. **Check DNS records in Njalla**
2. **Verify in Vercel:**
   - Settings → Domains → Click "Refresh"
3. **Use DNS checker:** https://www.whatsmydns.net

### SSL Certificate issues?

- Vercel provides free SSL automatically
- Wait 5-10 minutes after domain connection
- Vercel uses Let's Encrypt

---

## Performance Optimizations (Optional)

Once deployed, you can:

1. **Enable Analytics:**
   - Vercel → Project → Analytics (free tier available)

2. **Monitor Performance:**
   - Vercel → Project → Speed Insights

3. **Set up custom 404:**
   - Create `app/not-found.tsx`

---

## Cost

**Free Forever Plan includes:**
- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Automatic deployments

Your current site will easily fit in the free tier! 💰

---

## Next Steps After Deployment

1. ✅ Test all pages on live site
2. ✅ Set up Google Analytics (optional)
3. ✅ Submit to Google Search Console
4. ✅ Create sitemap.xml
5. ✅ Set up contact form backend (EmailJS, Resend, etc.)

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/help

---

**Ready to deploy? Follow Step 1 to push to GitHub, then Step 2 to deploy to Vercel!** 🚀
