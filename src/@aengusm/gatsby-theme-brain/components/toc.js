import React from "react"

const ToC = ({ headings }) => (
  <div>
    <h3>Table of contents</h3>
    <ul>
      {headings.map(heading => {
        if (heading.depth > 4) {
          return <div />
        }

        return (
          <li key={heading.value}>
            <a
              href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {heading.value}
            </a>
          </li>
        )
      })}
    </ul>
  </div>
)


export default ToC
