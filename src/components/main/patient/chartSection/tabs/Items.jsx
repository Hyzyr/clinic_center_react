import { bin, pen } from "components/items/SVG";
import React from "react";

export function Item({ SVG, label }) {
  return (
    <div className="tabs__item">
      {SVG && <div className="tabs__item-ico">{SVG}</div>}
      <div className="tabs__item-label">{label}</div>
    </div>
  );
}
export function ItemEditable({ SVG, label }) {
  return (
    <div className="tabs__item">
      {SVG && <div className="tabs__item-ico">{SVG}</div>}
      <div className="tabs__item-label">{label}</div>
      <div className="tabs__item-buttons">
        <button type="button" className="tabs__item-buttons-bin">
          {bin}
        </button>
        <button type="button" className="tabs__item-buttons-pen">
          {pen}
        </button>
      </div>
    </div>
  );
}

export function ItemEditableContent({ SVG, label, content }) {
  return (
    <div className="tabs__item tabs__item--content">
      <div className="tabs__item-row">
        {SVG && <div className="tabs__item-ico">{SVG}</div>}
        <div className="tabs__item-label">{label}</div>
        <div className="tabs__item-buttons">
          <button type="button" className="tabs__item-buttons-bin">
            {bin}
          </button>
          <button type="button" className="tabs__item-buttons-pen">
            {pen}
          </button>
        </div>
      </div>
      <div className="tabs__item-row">
        <div className="tabs__item-content">
          <div className="tabs__item-content-title">{content.title}</div>
          <div className="tabs__item-content-para">{content.para}</div>
        </div>
      </div>
    </div>
  );
}
