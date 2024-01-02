---
title: "Etc."
layout: archive-category
permalink: etc/
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.Etc %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
