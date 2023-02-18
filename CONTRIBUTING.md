# Contributing Information

Here's what you need to know before contributing.

---

## Chapters

1. What to consider
2. Project Structure
3. Where to contribute

---

## 1. What to consider

First, consider whether someone else has beat you to what you wanted to contribute (you can do this by looking through the issues/pull requests), if so, don't contribute what you wanted to and instead support the person with what you think would work.
Second, consider if _this_ (referring to your contribution) is a breaking change, and if so, make sure you warn the author that _this_ might break.

---

## 2. Project Structure

The project is structured like this:

```text
public (stuff like css, images, etc.)
    css (css stylesheets)
    images (images used)
        languages (auto-loaded in the Languages component)
src (source code)
    components (reusable code)
    data (extra data used sometimes)
    layouts (if you want to make a layout template, here's the place)
    pages (all pages in the website)
    typescript (external TypeScript code)
package.json (project)
```

---

## 3. Where to contribute

If your contribution is a bug report/feature suggestion, but you don't have the code, open a new issue and fill out all the necessary information.
Otherwise, just open a pull request and include your commit.

---

Hope this helps!
