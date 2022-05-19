---
title: "Algorithm"
layout: archive-category
permalink: categories/algorithm
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Algorithm %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
