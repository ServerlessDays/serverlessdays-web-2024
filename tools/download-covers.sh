#!/bin/bash

mkdir -p app/images/covers

jq -r '.[] | select(.slug != null and .image != null) | "\(.slug) \(.image)"' app/events.json | while read -r slug image; do
    echo "Downloading image for $slug"
    extension="${image##*.}"
    curl -s -o "app/images/covers/$slug.$extension" "$image" || echo "Failed to download image for $slug"
done

echo "Download complete"