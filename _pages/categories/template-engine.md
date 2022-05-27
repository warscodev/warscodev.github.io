---
title: "Template Engine"
layout: archive-category
permalink: categories/template-engine/
author_profile: true
sidebar:
    nav: "docs"
---

{% assign posts = site.categories['Template Engine'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
