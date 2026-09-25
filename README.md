# Shadow Ash QR Generator

A simple, lightweight, open-source **static QR code generator** built with Node.js, Express, and the `qrcode` package.

Generate high-resolution **PNG** or scalable **SVG** QR codes from any HTTP/HTTPS URL — with optional transparent backgrounds and Light/Dark mode.

> **Static QR means the URL is encoded directly into the QR code. There is no QR subscription, tracking service, redirect service, or built-in expiration.**

---

## ✨ Features

* 🔳 Generate static QR codes
* 🔗 Supports HTTP and HTTPS URLs
* 🖼️ Export as PNG
* 📐 Export as SVG
* 🪟 Transparent background option
* 🌗 Light / Dark mode
* 👀 Live QR preview
* 🖨️ High-resolution PNG output
* 🎨 Vector SVG output for editing and printing
* ⚡ Lightweight Node.js application
* 🔒 No external QR-generation service
* 🚫 No dynamic QR subscriptions
* 🚫 No built-in QR expiration

---

## 🛠️ Tech Stack

* Node.js
* Express
* JavaScript
* HTML / CSS
* `qrcode`

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/shadow-ash-qr-generator.git
```

Enter the project:

```bash
cd shadow-ash-qr-generator
```

Install dependencies:

```bash
npm install
```

---

## 🚀 Run

Start the application:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

```text
shadow-ash-qr-generator/
│
├── public/
│   └── index.html
│
├── server.js
│
├── package.json
│
└── README.md
```

---

## 🔳 How Static QR Codes Work

When you enter:

```text
https://example.com
```

the URL itself is encoded into the QR code.

The resulting QR effectively contains:

```text
QR Code
   ↓
https://example.com
```

There is no intermediate QR service.

Therefore, this application does not create:

```text
QR
 ↓
QR Provider
 ↓
Redirect
 ↓
Website
```

Instead:

```text
QR
 ↓
Your URL
```

This makes the generated QR suitable for printed materials such as:

* Business cards
* NFC cards
* Posters
* Flyers
* Packaging
* Menus
* Stickers
* Signage
* Marketing materials

---

## ♾️ Does the QR Code Expire?

**No expiration is built into the QR code.**

A static QR code does not have an expiration date.

However, the destination itself must remain available.

For example:

```text
QR
 ↓
https://example.com
```

The QR itself remains valid, but if `example.com` stops existing or the page is removed, scanning the QR will obviously no longer reach that page.

For maximum long-term reliability, use a domain and URL that you control.

---

## 🖼️ PNG vs SVG

### PNG

Use PNG when you need:

* Quick uploads
* Social media graphics
* Websites
* General digital use

The generator creates a high-resolution PNG suitable for most applications.

### SVG

Use SVG when you need:

* Printing
* Graphic design
* Canva
* Figma
* Illustrator
* Large-format artwork

SVG is vector-based and can be scaled without losing quality.

**For professional print/editing workflows, SVG is recommended as the master file.**

---

## 🪟 Transparent Background

Enable:

```text
Transparent background
```

to generate a QR with no solid background.

This is useful when placing the QR over an existing design.

Make sure there is still sufficient contrast between the QR modules and the underlying design.

---

## ⚙️ QR Configuration

The generator uses a relatively high error-correction level suitable for physical applications.

Current configuration:

```js
{
  errorCorrectionLevel: "Q",
  margin: 4,
  width: 1600
}
```

### Error Correction

The `Q` level provides increased resistance to damage or obstruction compared with lower correction levels.

### Margin

A quiet zone is preserved around the QR code so scanners can reliably detect its boundaries.

### PNG Resolution

PNG output is generated at a large resolution for better editing and print workflows.

---

## 🔐 Privacy

This application does not need to send your QR URLs to a third-party QR-generation website.

The application generates the QR locally through the Node.js backend.

No analytics or tracking system is included by default.

---

## 🧑‍💻 Development

Run the application:

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

---

## 📜 License

This project is licensed under the **MIT License**.

You are free to:

* Use the software
* Copy it
* Modify it
* Distribute it
* Use it commercially
* Sublicense it

subject to the terms of the MIT License.

---

# MIT License

Copyright (c) 2026 Shadow Ash

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
