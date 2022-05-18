---
title: "Etc."
layout: archive
permalink: categories/etc
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Etc %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}
