import React from 'react'

export default function Counter(props) {
  return (
    <>
        <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">{props.count}</span>
                <p>{props.title}</p>
            </div>
        </div>
    </>
  )
}
