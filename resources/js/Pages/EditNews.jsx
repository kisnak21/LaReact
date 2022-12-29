import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handlerSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setNotification(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    console.log(props);
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="max-w-7xl mx-auto p-5 sm:px-6 lg:px-8">
                <div className="p-6 bg-white text-gray-900 border rounded-lg">
                    <input
                        type="text"
                        placeholder="Title"
                        className="m-2 input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="m-2 input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="m-2 input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handlerSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
