# Rotaract Club of Yerevan — Website

A small, static, mobile-friendly website for the Rotaract Club of Yerevan.
Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build
step — so it runs directly on GitHub Pages.

## Files

```
index.html       Home / About the club
rotaract.html    What is Rotaract
members.html     Member cards (easy to duplicate/edit)
projects.html    Project cards (easy to duplicate/edit)
style.css        Shared styles for all pages (colors, layout, fonts)
script.js        Shared behavior (mobile menu, scroll animations)
README.md        This file
```

Optional: create an `images/` folder (with `images/members/` and
`images/projects/` subfolders) once you have real photos to replace the
placeholder boxes. See the comments inside `members.html` and
`projects.html` for exactly where to swap them in.

## 1. Before you publish — things to edit

Open each file and look for `<!-- EDIT: ... -->` comments — they mark every
spot you should personalize:

- **Instagram / Facebook links** — in `index.html` (hero + CTA) and in the
  footer of all four pages. Search for `YOUR_INSTAGRAM_HANDLE` and
  `YOUR_FACEBOOK_PAGE`.
- **Contact email** — search for `info@rotaractyerevan.org` in the footer
  of all four pages and in `projects.html`.
- **Founding year / mission text** — in `index.html`.
- **Rotary sponsor club name** — in `rotaract.html`.
- **Member cards** — in `members.html`. Duplicate the card block for each
  real member, and delete the placeholder ones you don't need.
- **Project cards** — in `projects.html`. The environmental bins project
  is already filled in as an example; duplicate its card block for new
  projects.

Brand colors and fonts live at the very top of `style.css` — change the two
color variables there to re-theme the whole site at once if you ever want to.

## 2. Put this on GitHub

If you haven't already:

1. Create a new repository on GitHub — for example, name it
   `rotaract-yerevan` (the name doesn't matter, but keep note of it).
2. Upload all the files in this folder to the repository, keeping them at
   the **root** of the repo (not inside a subfolder) — `index.html` should
   sit directly at the top level.
   - Easiest way: on the repo page, click **Add file → Upload files**, drag
     in all the files, and commit.
   - Or, if you use Git locally:
     ```bash
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/rotaract-yerevan.git
     git push -u origin main
     ```

## 3. Turn on GitHub Pages

1. In your repository on GitHub, click **Settings** (top right of the repo).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** (or whichever branch has your files)
   and folder **/ (root)**, then click **Save**.
5. Wait about 30–60 seconds, then refresh the Pages settings page. A green
   banner will appear with your live link, in the form:
   ```
   https://YOUR_USERNAME.github.io/rotaract-yerevan/
   ```
6. Open that link to confirm the site loads. That's the link to put in your
   Instagram bio.

## 4. Updating the site later

Any time you edit a file and push/upload the change to the `main` branch,
GitHub Pages automatically rebuilds the live site within a minute or two —
no extra steps needed.

## 5. Notes

- No custom domain is required — the `github.io` link works out of the box.
- The site has no backend and stores no data; it's just static files, so
  hosting is completely free on GitHub Pages.
- The mobile hamburger menu, active-page highlighting, and scroll fade-in
  animation are all handled by `script.js` — no configuration needed.
