---
title: "VCS"
layout: archive-category
permalink: vcs/
author_profile: true
sidebar:
    nav: "docs"    
---

{% assign posts = site.categories.VCS %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
