"use strict";
function slugify(title) {
  const lowercaseTitle = title.toLowerCase();
  const words = lowercaseTitle.split(" ");
  const slug = words.join("-");
  return slug;
}
