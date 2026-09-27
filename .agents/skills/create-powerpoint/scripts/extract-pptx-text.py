"""Extract visible PPTX text into UTF-8 Markdown.

Dependencies: Python 3.9+ (standard library only).
Usage: python scripts/extract-pptx-text.py <source.pptx> <destination.md>
"""

from __future__ import annotations

import argparse
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


DRAWING_NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}


def slide_number(path: str) -> int:
    match = re.search(r"slide(\d+)\.xml$", path)
    if not match:
        raise ValueError(f"Unexpected slide path: {path}")
    return int(match.group(1))


def extract_slide_text(xml: bytes) -> list[str]:
    root = ET.fromstring(xml)
    paragraphs = []
    for paragraph in root.findall(".//a:p", DRAWING_NS):
        text = "".join(run.text or "" for run in paragraph.findall(".//a:t", DRAWING_NS)).strip()
        if text:
            paragraphs.append(text)
    return paragraphs


def extract(source: Path, destination: Path) -> None:
    with zipfile.ZipFile(source) as presentation:
        slides = sorted(
            (name for name in presentation.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)),
            key=slide_number,
        )
        markdown = []
        for path in slides:
            markdown.append(f"<!-- Slide number: {slide_number(path)} -->")
            markdown.extend(extract_slide_text(presentation.read(path)))
            markdown.append("")
    destination.write_text("\n".join(markdown), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract visible PPTX text into UTF-8 Markdown.")
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    extract(args.source, args.destination)


if __name__ == "__main__":
    main()
