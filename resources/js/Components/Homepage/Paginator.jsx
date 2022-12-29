import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Paginator({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group grid grid-cols-3">
            {prev && (
                <Link href={prev} className="btn btn-outline">
                    Previous
                </Link>
            )}
            <button className="btn btn-inline">{current}</button>
            {next && (
                <Link href={next} className="btn btn-outline">
                    Next
                </Link>
            )}
        </div>
    );
}
