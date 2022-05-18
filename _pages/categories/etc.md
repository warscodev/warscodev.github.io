---
title: "Etc."
layout: archive-category
permalink: categories/etc/
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Etc %}
{% assign index = site.categories.Etc.index %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}
