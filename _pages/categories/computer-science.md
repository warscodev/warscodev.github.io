---
title: "Computer Science"
layout: archive-category
permalink: categories/computer-science
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Computer-Science %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}