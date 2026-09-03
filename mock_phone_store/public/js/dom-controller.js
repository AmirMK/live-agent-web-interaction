/**
 * DOM Automation Controller for PhoneVerse Store
 * 
 * This file is part of the mock_phone_store repository.
 * Developers can modify this file directly to add new filters, customize screen scraping,
 * or change button/element interactions without needing to rebuild or touch the AI widget.
 */

(function () {
  "use strict";

  // 1. Inject highlight styles for card spotlighting
  function injectHighlightStyles() {
    if (document.getElementById("live-agent-highlight-style")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "live-agent-highlight-style";
    styleEl.textContent = `
      .live-agent-highlight {
        outline: 3px solid #0ea5e9 !important;
        outline-offset: 4px !important;
        box-shadow: 0 0 25px rgba(14, 165, 233, 0.8) !important;
        transition: all 0.3s ease !important;
        position: relative !important;
      }
      .live-agent-highlight::after {
        content: "★ TECH EXPERT PICK";
        position: absolute;
        top: 10px;
        right: 10px;
        background: #0ea5e9;
        color: #020617;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.5px;
        padding: 3px 8px;
        border-radius: 9999px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        z-index: 20;
        pointer-events: none;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // 2. Scrape current page context, active filters, and phone cards
  function getScreenContent() {
    const isHomePage =
      window.location.pathname.endsWith("/index.html") ||
      window.location.pathname === "/" ||
      !!document.getElementById("home-filter-sidebar");
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(window.location.search);

    const lines = [];
    lines.push(`PAGE URL: ${currentUrl}`);
    lines.push(`PAGE TITLE: ${document.title}`);
    lines.push(
      `PAGE TYPE: ${
        isHomePage
          ? "HOME SEARCH FORM & TRENDING DEALS (/index.html)"
          : "DYNAMIC PHONE CATALOG SEARCH (/search.html)"
      }`
    );

    if (searchParams.toString()) {
      lines.push(`ACTIVE URL QUERY PARAMS: ?${searchParams.toString()}`);
    }

    if (isHomePage) {
      lines.push("\n=== TOP TRENDING DEALS OF THE WEEK ===");
      const trendingCards = Array.from(
        document.querySelectorAll("#trending-phones-grid .trending-card")
      );
      if (trendingCards.length > 0) {
        trendingCards.forEach((c) => {
          const pid =
            c.getAttribute("data-phone-id") || c.getAttribute("data-id") || "";
          const title =
            c.querySelector(".trending-title")?.textContent?.trim() ||
            "Unknown Phone";
          const price =
            c.querySelector(".trending-price")?.textContent?.trim() || "";
          const rating =
            c.querySelector(".star-rating, .trending-meta-row")?.textContent?.trim() || "";
          const specs =
            c.querySelector(".spec-pill")?.textContent?.trim() || "";
          const desc =
            c.querySelector(".trending-desc")?.textContent?.trim() || "";
          lines.push(
            `- [ID: ${pid}] "${title}" | Price: ${price} | Rating: ${rating} | Specs: ${specs} | Summary: ${desc}`
          );
        });
      } else {
        lines.push("No trending cards rendered.");
      }

      lines.push("\n=== HOME SEARCH FORM CONTROLS ===");
      const checkedHomeBrands = Array.from(
        document.querySelectorAll('#home-brand-checkboxes input[name="brand"]:checked')
      ).map((cb) => cb.value);
      const allHomeBrands = Array.from(
        document.querySelectorAll('#home-brand-checkboxes input[name="brand"]')
      ).map((cb) => cb.value);
      lines.push(
        `- Brands: Active=[${checkedHomeBrands.join(", ") || "None"}], Available=[${
          allHomeBrands.join(", ") || "None"
        }]`
      );

      const homeMinPrice =
        document.getElementById("home-min-price")?.value || "None";
      const homeMaxPrice =
        document.getElementById("home-max-price")?.value || "None";
      lines.push(`- Budget Range: Min="${homeMinPrice}", Max="${homeMaxPrice}"`);

      const checkedSys =
        document.querySelector('input[name="system"]:checked')?.value || "All";
      const allHomeSystems = Array.from(
        document.querySelectorAll('input[name="system"]')
      ).map((r) => r.value);
      lines.push(
        `- Operating System: Active="${checkedSys}", Available=[${
          allHomeSystems.join(", ") || "None"
        }]`
      );

      const activeStoragePills = Array.from(
        document.querySelectorAll("#home-storage-pills .storage-pill.active")
      )
        .map((p) => p.getAttribute("data-storage") || p.textContent?.trim())
        .filter(Boolean);
      const allStoragePills = Array.from(
        document.querySelectorAll("#home-storage-pills .storage-pill")
      )
        .map((p) => p.getAttribute("data-storage") || p.textContent?.trim())
        .filter(Boolean);
      lines.push(
        `- Storage: Active=[${activeStoragePills.join(", ") || "None"}], Available=[${
          allStoragePills.join(", ") || "None"
        }]`
      );

      const is5GChecked = document.getElementById("home-5g-toggle")?.checked;
      lines.push(
        `- 5G Network Only (#home-5g-toggle): ${
          is5GChecked ? "CHECKED (ON)" : "UNCHECKED (OFF)"
        }`
      );

      const homeRatingSelect = document.getElementById("home-rating-select");
      if (homeRatingSelect) {
        const sel = homeRatingSelect.options[homeRatingSelect.selectedIndex];
        const allHomeRatings = Array.from(homeRatingSelect.options).map(
          (o) => `${o.value ? `${o.value}+ Stars` : "Any Rating"}`
        );
        lines.push(
          `- Minimum Rating: Active="${
            sel ? sel.text : homeRatingSelect.value
          }", Available=[${allHomeRatings.join(", ") || "None"}]`
        );
      }

      const submitBtn = document.getElementById("btn-home-search");
      if (submitBtn) {
        lines.push(
          `- Submit Button: "#btn-home-search" (Label: "${
            submitBtn.textContent ? submitBtn.textContent.trim() : "SEARCH PHONES"
          }") -> Navigates to /search.html`
        );
      }
    } else {
      lines.push("\n=== ACTIVE APPLIED FILTERS & AVAILABLE OPTIONS ===");

      const kwInput = document.getElementById("search-keyword-input");
      if (kwInput && kwInput.value) {
        lines.push(`- Keyword Search: "${kwInput.value}"`);
      }

      const checkedBrands = Array.from(
        document.querySelectorAll(".filter-input-brand:checked")
      ).map((cb) => cb.value);
      const allBrands = Array.from(
        document.querySelectorAll(".filter-input-brand")
      ).map((cb) => cb.value);
      lines.push(
        `- Brands: Active=[${checkedBrands.join(", ") || "None"}], Available=[${
          allBrands.join(", ") || "None"
        }]`
      );

      const checkedSystems = Array.from(
        document.querySelectorAll(".filter-input-system:checked")
      ).map((cb) => cb.value);
      const allSystems = Array.from(
        document.querySelectorAll(".filter-input-system")
      ).map((cb) => cb.value);
      lines.push(
        `- Operating System: Active=[${
          checkedSystems.join(", ") || "None"
        }], Available=[${allSystems.join(", ") || "None"}]`
      );

      const checkedNetworks = Array.from(
        document.querySelectorAll(".filter-input-net:checked")
      ).map((cb) => cb.value);
      const allNetworks = Array.from(
        document.querySelectorAll(".filter-input-net")
      ).map((cb) => cb.value);
      lines.push(
        `- Network Type: Active=[${
          checkedNetworks.join(", ") || "None"
        }], Available=[${allNetworks.join(", ") || "None"}]`
      );

      const minPrice = document.getElementById("search-min-price")?.value || "None";
      const maxPrice = document.getElementById("search-max-price")?.value || "None";
      lines.push(`- Price Filter: Active=[Min="${minPrice}", Max="${maxPrice}"]`);

      const checkedRatings = Array.from(
        document.querySelectorAll(".filter-input-rating:checked")
      ).map((cb) => cb.value);
      const allRatings = Array.from(
        document.querySelectorAll(".filter-input-rating")
      ).map((cb) => cb.value);
      lines.push(
        `- Rating Filter: Active=[${
          checkedRatings.join(", ") || "None"
        }], Available=[${
          allRatings.map((r) => `${r} Stars & Up`).join(", ") || "None"
        }]`
      );

      const checkedStorages = Array.from(
        document.querySelectorAll(".filter-input-storage:checked")
      ).map((cb) => cb.value);
      const allStorages = Array.from(
        document.querySelectorAll(".filter-input-storage")
      ).map((cb) => cb.value);
      lines.push(
        `- Storage Options: Active=[${
          checkedStorages.join(", ") || "None"
        }], Available=[${allStorages.join(", ") || "None"}]`
      );

      const checkedColors = Array.from(
        document.querySelectorAll(".filter-input-color:checked")
      ).map((cb) => cb.value);
      const allColors = Array.from(
        document.querySelectorAll(".filter-input-color")
      ).map((cb) => cb.value);
      lines.push(
        `- Colors: Active=[${checkedColors.join(", ") || "None"}], Available=[${
          allColors.join(", ") || "None"
        }]`
      );

      const checkedResolutions = Array.from(
        document.querySelectorAll(".filter-input-resolution:checked")
      ).map((cb) => cb.value);
      const allResolutions = Array.from(
        document.querySelectorAll(".filter-input-resolution")
      ).map((cb) => cb.value);
      lines.push(
        `- Resolution Category: Active=[${
          checkedResolutions.join(", ") || "None"
        }], Available=[${allResolutions.join(", ") || "None"}]`
      );

      const checkedDetailedRes = Array.from(
        document.querySelectorAll(".filter-input-detailed-res:checked")
      ).map((cb) => cb.value);
      const allDetailedRes = Array.from(
        document.querySelectorAll(".filter-input-detailed-res")
      ).map((cb) => cb.value);
      lines.push(
        `- Detailed Resolution: Active=[${
          checkedDetailedRes.join(", ") || "None"
        }], Available=[${allDetailedRes.join(", ") || "None"}]`
      );

      const checkedCameras = Array.from(
        document.querySelectorAll(".filter-input-camera:checked")
      ).map((cb) => cb.value);
      const allCameras = Array.from(
        document.querySelectorAll(".filter-input-camera")
      ).map((cb) => cb.value);
      lines.push(
        `- Primary Camera: Active=[${
          checkedCameras.join(", ") || "None"
        }], Available=[${allCameras.join(", ") || "None"}]`
      );

      const checkedScreens = Array.from(
        document.querySelectorAll(".filter-input-screen:checked")
      ).map((cb) => cb.value);
      const allScreens = Array.from(
        document.querySelectorAll(".filter-input-screen")
      ).map((cb) => cb.value);
      lines.push(
        `- Screen Size: Active=[${
          checkedScreens.join(", ") || "None"
        }], Available=[${allScreens.join(", ") || "None"}]`
      );

      const sortSelect = document.getElementById("sort-by-select");
      if (sortSelect) {
        const opt = sortSelect.options[sortSelect.selectedIndex];
        const allSorts = Array.from(sortSelect.options).map(
          (o) => `${o.value} ("${o.text}")`
        );
        lines.push(
          `- Sort By (#sort-by-select): Selected="${
            opt ? opt.text : sortSelect.value
          }" (${sortSelect.value}), Available=[${allSorts.join(", ")}]`
        );
      }

      const countEl = document.getElementById("results-count");
      const resultsCount = countEl ? countEl.textContent?.trim() : "0";
      const selectedBadge = document.getElementById("selected-count-badge");
      if (selectedBadge && selectedBadge.textContent) {
        lines.push(`- Selected Items Badge: ${selectedBadge.textContent.trim()}`);
      }

      const phoneCards = Array.from(
        document.querySelectorAll("#phones-results-grid .phone-card")
      );
      lines.push(
        `\n=== CATALOG SMARTPHONES (${resultsCount} Matching Phones, ${phoneCards.length} Loaded on Screen) ===`
      );

      const serializePhone = (card) => {
        const pid =
          card.getAttribute("data-id") ||
          card.getAttribute("data-phone-id") ||
          "";
        const title =
          card.querySelector(".phone-brand-title, h3")?.textContent?.trim() ||
          "Unknown Smartphone";
        const price =
          card.querySelector(".phone-price")?.textContent?.trim() || "";
        const rating =
          card.querySelector(".star-rating, .rating")?.textContent?.trim() || "";
        const isSelected =
          card.classList.contains("selected") ||
          card.getAttribute("aria-selected") === "true";
        const is5G = !!card.querySelector(".phone-5g-badge");
        const os =
          card.querySelector(".phone-os-badge")?.textContent?.trim() || "";
        const specPills = Array.from(card.querySelectorAll(".spec-pill"))
          .map((s) => s.textContent?.trim())
          .filter(Boolean)
          .join(" | ");
        const desc =
          card.querySelector(".phone-full-desc-box")?.textContent?.trim() || "";

        return `Phone [ID: ${pid}] "${title}" | Price: ${price} | Rating: ${
          rating || "N/A"
        }${os ? ` | OS: ${os}` : ""}${is5G ? " | [5G]" : ""} | Specs: [${specPills}]${
          isSelected ? " | [SELECTED / CHECKED]" : ""
        }\n   Description: ${desc.slice(0, 150)}${
          desc.length > 150 ? "..." : ""
        }`;
      };

      if (phoneCards.length > 0) {
        phoneCards.slice(0, 20).forEach((c) => lines.push(serializePhone(c)));
      } else {
        lines.push(
          "No smartphones currently match the selected filter criteria."
        );
      }
    }

    return lines.join("\n");
  }

  // 3. Interact with website controls (filters, buttons, inputs)
  function enterFormData(fieldName, value) {
    if (!fieldName && !value) {
      return { success: false, message: "Missing fieldName and value" };
    }

    const isHomePage =
      window.location.pathname.endsWith("/index.html") ||
      window.location.pathname === "/" ||
      !!document.getElementById("home-filter-sidebar");
    const lowerField = (fieldName || "").toLowerCase().trim();
    const lowerVal = (value || "").toLowerCase().trim();

    const dispatchChange = (el) => {
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    };

    if (
      lowerField === "reset filters" ||
      lowerField === "reset all" ||
      lowerField === "reset all filters" ||
      lowerField === "reset" ||
      lowerField === "clear all" ||
      lowerField === "#btn-search-reset" ||
      lowerField === "#btn-home-reset"
    ) {
      const btn =
        document.getElementById("btn-search-reset") ||
        document.getElementById("btn-home-reset") ||
        document.querySelector(".btn-reset-filters");
      if (btn) {
        btn.click();
        return { success: true, message: "Clicked Reset All Filters button." };
      }
    }

    if (
      lowerField === "clear selection" ||
      lowerField === "#btn-clear-selection"
    ) {
      const btn = document.getElementById("btn-clear-selection");
      if (btn) {
        btn.click();
        return { success: true, message: "Clicked Clear Selection button." };
      }
    }

    if (
      lowerField === "search phones" ||
      lowerField === "search phone" ||
      lowerField === "search" ||
      lowerField === "submit" ||
      lowerField === "#btn-home-search"
    ) {
      const btn =
        document.getElementById("btn-home-search") ||
        document.querySelector('#home-filter-form button[type="submit"]');
      if (btn) {
        btn.click();
        return {
          success: true,
          message:
            "Clicked Search Phones button. Navigating to dynamic search catalog...",
        };
      }
    }

    const handleCheckboxList = (groupName, selector, targetVal) => {
      const boxes = Array.from(document.querySelectorAll(selector));
      if (boxes.length === 0) return null;

      const clean = targetVal.toLowerCase().trim();
      const isClearAll =
        clean === "all" ||
        clean === "none" ||
        clean === "clear" ||
        clean === "clear all" ||
        clean === "reset" ||
        clean === "false";

      if (isClearAll) {
        let count = 0;
        boxes.forEach((cb) => {
          if (cb.checked) {
            cb.checked = false;
            dispatchChange(cb);
            count++;
          }
        });
        return {
          success: true,
          message: `Cleared all ${groupName} filters (${count} unchecked).`,
        };
      }

      const isUncheck =
        clean.startsWith("uncheck ") ||
        clean.startsWith("remove ") ||
        clean.startsWith("deselect ") ||
        clean.endsWith(" false") ||
        clean.endsWith(" off");
      const targetItem = clean
        .replace(/^(uncheck|remove|deselect|check)\s+/, "")
        .replace(/\s+(false|off|true|on)$/, "")
        .trim();

      const matched = boxes.find((cb) => {
        const name = (
          cb.value ||
          cb.parentElement?.textContent ||
          ""
        )
          .toLowerCase()
          .trim();
        return (
          name === targetItem ||
          name.includes(targetItem) ||
          (targetItem.length > 2 && targetItem.includes(name))
        );
      });

      if (matched) {
        const shouldCheck = !isUncheck;
        matched.checked = shouldCheck;
        dispatchChange(matched);
        return {
          success: true,
          message: `Set ${groupName} filter "${matched.value}" to ${
            shouldCheck ? "checked" : "unchecked"
          }`,
        };
      }

      return null;
    };

    const cleanNumber = (str) => {
      const match = str.replace(/[$,]/g, "").match(/\d+(\.\d+)?/);
      if (!match) return "";
      let num = parseFloat(match[0]);
      if (str.toLowerCase().includes("k")) num *= 1000;
      return Math.round(num).toString();
    };

    if (
      lowerField === "keyword" ||
      lowerField === "model" ||
      lowerField === "search keyword" ||
      lowerField === "#search-keyword-input"
    ) {
      const input = document.getElementById("search-keyword-input");
      if (input) {
        input.value = value === "clear" || value === "none" ? "" : value;
        dispatchChange(input);
        return { success: true, message: `Set search keyword to "${input.value}"` };
      }
    }

    if (
      lowerField === "brand" ||
      lowerField === "brands" ||
      lowerField === "#search-brand-checkboxes" ||
      lowerField === "#home-brand-checkboxes"
    ) {
      const selector = isHomePage
        ? '#home-brand-checkboxes input[name="brand"]'
        : ".filter-input-brand";
      const res = handleCheckboxList("Brand", selector, lowerVal);
      if (res) return res;
    }

    if (
      lowerField === "operating system" ||
      lowerField === "system" ||
      lowerField === "os" ||
      lowerField === "#search-system-pills"
    ) {
      if (isHomePage) {
        const radios = Array.from(
          document.querySelectorAll('input[name="system"]')
        );
        const matched = radios.find(
          (r) =>
            r.value.toLowerCase() === lowerVal ||
            lowerVal.includes(r.value.toLowerCase())
        );
        if (matched) {
          matched.checked = true;
          dispatchChange(matched);
          return {
            success: true,
            message: `Set Operating System to ${matched.value}`,
          };
        }
      } else {
        const res = handleCheckboxList(
          "Operating System",
          ".filter-input-system",
          lowerVal
        );
        if (res) return res;
      }
    }

    if (
      lowerField === "network" ||
      lowerField === "network type" ||
      lowerField === "5g" ||
      lowerField === "is5g" ||
      lowerField === "#home-5g-toggle" ||
      lowerField === "#search-network-checkboxes"
    ) {
      if (isHomePage) {
        const toggle = document.getElementById("home-5g-toggle");
        if (toggle) {
          const shouldCheck = !(
            lowerVal === "false" ||
            lowerVal === "off" ||
            lowerVal === "uncheck" ||
            lowerVal === "0" ||
            lowerVal === "no"
          );
          toggle.checked = shouldCheck;
          dispatchChange(toggle);
          return {
            success: true,
            message: `Set 5G Network Only toggle on Home page form to ${
              shouldCheck ? "CHECKED (ON)" : "UNCHECKED (OFF)"
            }. Call enter_form_data(field_name='Search Phones', value='click') to view results.`,
          };
        }
      } else {
        let netVal = lowerVal;
        if (
          (lowerField === "5g" || lowerField === "is5g") &&
          (netVal === "uncheck" ||
            netVal === "false" ||
            netVal === "off" ||
            netVal === "0" ||
            netVal === "no")
        ) {
          netVal = "uncheck 5G";
        } else if (
          (lowerField === "5g" || lowerField === "is5g") &&
          (netVal === "check" ||
            netVal === "true" ||
            netVal === "on" ||
            netVal === "1" ||
            netVal === "yes" ||
            netVal === "5g")
        ) {
          netVal = "5G";
        }
        const res = handleCheckboxList(
          "Network Type",
          ".filter-input-net",
          netVal
        );
        if (res) return res;
      }
    }

    if (
      lowerField === "min price" ||
      lowerField === "price min" ||
      lowerField === "minprice" ||
      lowerField === "#search-min-price" ||
      lowerField === "#home-min-price"
    ) {
      const input =
        document.getElementById("search-min-price") ||
        document.getElementById("home-min-price");
      if (input) {
        const val = cleanNumber(value);
        input.value = val;
        dispatchChange(input);
        return {
          success: true,
          message: `Set minimum price to ${val || "None"}`,
        };
      }
    }

    if (
      lowerField === "max price" ||
      lowerField === "price max" ||
      lowerField === "maxprice" ||
      lowerField === "budget" ||
      lowerField === "#search-max-price" ||
      lowerField === "#home-max-price"
    ) {
      const input =
        document.getElementById("search-max-price") ||
        document.getElementById("home-max-price");
      if (input) {
        const val = cleanNumber(value);
        input.value = val;
        dispatchChange(input);
        return {
          success: true,
          message: `Set maximum price to ${val || "None"}`,
        };
      }
    }

    if (
      lowerField === "rating" ||
      lowerField === "min rating" ||
      lowerField === "minimum rating" ||
      lowerField === "stars" ||
      lowerField === "#search-rating-checkboxes" ||
      lowerField === "#home-rating-select"
    ) {
      if (isHomePage) {
        const homeRatingSelect = document.getElementById("home-rating-select");
        if (homeRatingSelect) {
          const numMatch = lowerVal.match(/\d+/);
          const targetStars = numMatch ? numMatch[0] : "";
          const options = Array.from(homeRatingSelect.options);
          const idx = options.findIndex((o) =>
            targetStars
              ? o.value === targetStars
              : o.text.toLowerCase().includes(lowerVal)
          );
          if (idx !== -1) {
            homeRatingSelect.selectedIndex = idx;
            dispatchChange(homeRatingSelect);
            return {
              success: true,
              message: `Set home rating filter to "${options[idx].text}"`,
            };
          }
        }
      } else {
        const res = handleCheckboxList(
          "Rating",
          ".filter-input-rating",
          lowerVal
        );
        if (res) return res;
      }
    }

    if (
      lowerField === "storage" ||
      lowerField === "internal storage" ||
      lowerField === "capacity" ||
      lowerField === "#search-storage-pills" ||
      lowerField === "#home-storage-pills"
    ) {
      if (isHomePage) {
        const pills = Array.from(
          document.querySelectorAll("#home-storage-pills .storage-pill")
        );
        const target = lowerVal.replace("gb", "").replace("tb", "000").trim();
        const matched = pills.find((p) =>
          (p.getAttribute("data-storage") || p.textContent || "")
            .toLowerCase()
            .includes(target)
        );
        if (matched) {
          matched.click();
          return {
            success: true,
            message: `Selected storage pill "${matched.textContent?.trim()}" on home form`,
          };
        }
      } else {
        const res = handleCheckboxList(
          "Storage",
          ".filter-input-storage",
          lowerVal
        );
        if (res) return res;
      }
    }

    if (
      lowerField === "color" ||
      lowerField === "colour" ||
      lowerField === "#search-color-swatches"
    ) {
      const res = handleCheckboxList("Color", ".filter-input-color", lowerVal);
      if (res) return res;
    }

    if (
      lowerField === "resolution" ||
      lowerField === "display resolution" ||
      lowerField === "resolution category" ||
      lowerField === "#search-resolution-checkboxes"
    ) {
      const res = handleCheckboxList(
        "Resolution",
        ".filter-input-resolution",
        lowerVal
      );
      if (res) return res;
    }

    if (
      lowerField === "detailed resolution" ||
      lowerField === "exact resolution" ||
      lowerField === "#search-detailed-res-pills"
    ) {
      const res = handleCheckboxList(
        "Detailed Resolution",
        ".filter-input-detailed-res",
        lowerVal
      );
      if (res) return res;
    }

    if (
      lowerField === "camera" ||
      lowerField === "primary camera" ||
      lowerField === "camera mp" ||
      lowerField === "#search-camera-checkboxes"
    ) {
      const res = handleCheckboxList(
        "Camera",
        ".filter-input-camera",
        lowerVal
      );
      if (res) return res;
    }

    if (
      lowerField === "screen" ||
      lowerField === "screen size" ||
      lowerField === "display size" ||
      lowerField === "#search-screensize-pills"
    ) {
      const res = handleCheckboxList(
        "Screen Size",
        ".filter-input-screen",
        lowerVal
      );
      if (res) return res;
    }

    if (
      lowerField === "sort by" ||
      lowerField === "sort" ||
      lowerField === "order by" ||
      lowerField === "#sort-by-select"
    ) {
      const sortSelect = document.getElementById("sort-by-select");
      if (sortSelect) {
        const options = Array.from(sortSelect.options);
        let idx = -1;

        if (
          lowerVal.includes("rating") ||
          lowerVal.includes("popular") ||
          lowerVal.includes("top rated") ||
          lowerVal === "rating-desc"
        ) {
          idx = options.findIndex((o) => o.value === "rating-desc");
        } else if (
          lowerVal.includes("low to high") ||
          lowerVal.includes("cheap") ||
          lowerVal === "price-asc"
        ) {
          idx = options.findIndex((o) => o.value === "price-asc");
        } else if (
          lowerVal.includes("high to low") ||
          lowerVal.includes("expensive") ||
          lowerVal === "price-desc"
        ) {
          idx = options.findIndex((o) => o.value === "price-desc");
        } else if (
          lowerVal.includes("name") ||
          lowerVal.includes("a-z") ||
          lowerVal === "name-asc"
        ) {
          idx = options.findIndex((o) => o.value === "name-asc");
        } else if (
          lowerVal.includes("relevance") ||
          lowerVal.includes("feature") ||
          lowerVal === "relevance"
        ) {
          idx = options.findIndex((o) => o.value === "relevance");
        }

        if (idx !== -1) {
          sortSelect.selectedIndex = idx;
          dispatchChange(sortSelect);
          return {
            success: true,
            message: `Updated sort by to "${options[idx].text}" (${options[idx].value})`,
          };
        }
      }
    }

    return {
      success: false,
      message: `Could not find filter matching "${fieldName}" with value "${value}" on current page.`,
    };
  }

  // 4. Highlight and select matching phone cards
  function highlightElements(elementTexts) {
    injectHighlightStyles();

    // Clear previous highlight class
    document
      .querySelectorAll(".live-agent-highlight")
      .forEach((el) => el.classList.remove("live-agent-highlight"));

    // Clear previous selections
    const clearBtn = document.getElementById("btn-clear-selection");
    if (clearBtn) {
      clearBtn.click();
    } else {
      document
        .querySelectorAll(".phone-card.selected, .trending-card.selected")
        .forEach((card) => {
          card.classList.remove("selected");
          card.removeAttribute("aria-selected");
        });
    }

    if (!elementTexts || elementTexts.length === 0) {
      return { success: true, highlightedCount: 0 };
    }

    let count = 0;
    const cards = Array.from(
      document.querySelectorAll(
        "#phones-results-grid .phone-card, #trending-phones-grid .trending-card, .phone-card, .trending-card"
      )
    );

    elementTexts.forEach((text) => {
      const clean = (text || "").toLowerCase().trim();
      if (!clean) return;

      // 1. Strict unique Phone ID match
      let matched = cards.find((card) => {
        const pid = (
          card.getAttribute("data-id") ||
          card.getAttribute("data-phone-id") ||
          card.id ||
          ""
        )
          .toLowerCase()
          .trim();
        return pid.length > 0 && pid === clean;
      });

      // 2. Fallback by title
      if (!matched) {
        matched = cards.find((card) => {
          const title = (
            card.querySelector(".phone-brand-title, .trending-title, h3")
              ?.textContent || ""
          )
            .toLowerCase()
            .trim();
          return (
            title.length > 0 &&
            (title === clean || title.includes(clean) || clean.includes(title))
          );
        });
      }

      if (matched) {
        matched.classList.add("live-agent-highlight");

        if (
          !matched.classList.contains("selected") &&
          matched.getAttribute("aria-selected") !== "true"
        ) {
          matched.click();
        }

        if (count === 0) {
          matched.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        count++;
      }
    });

    return { success: true, highlightedCount: count };
  }

  // Expose to global window object
  window.PhoneAgentController = {
    injectHighlightStyles: injectHighlightStyles,
    getScreenContent: getScreenContent,
    enterFormData: enterFormData,
    highlightElements: highlightElements,
  };

  console.log("[PhoneVerse] window.PhoneAgentController initialized and ready.");
})();
