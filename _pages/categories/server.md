---
title: "Server"
layout: archive-category
permalink: server/
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Server %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
