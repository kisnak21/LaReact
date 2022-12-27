import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-200">
            <Head title={props.title} />
            <div>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black shadow-md border rounded-lg"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p>{data.description}</p>
                                <p className="text-sm">{data.category}</p>
                                <p className="text-sm text-red-500">
                                    {data.author}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada berita.</p>
                )}
            </div>
        </div>
    );
}
