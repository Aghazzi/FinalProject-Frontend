// import { useQuery, useMutation, useQueryClient } from "react-query";
// import { getJobs, addJob, updateJob, deleteJob } from "../../../../common/utilities/api/jobsApis.js";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

// export const JobList = () => {
//     const [newJob, setNewJob] = useState("");
//     const queryClient = useQueryClient();

//     const {
//         isLoading,
//         isError,
//         error,
//         data: jobs,
//     } = useQuery("jobs", getJobs, {
//         select: (data) => data.sort((a, b) => b.id - a.id),
//     });

//     const addTodoMutation = useMutation(addJob, {
//         onSuccess: () => {
//             // Invalidates cache and refetch
//             queryClient.invalidateQueries("jobs");
//         },
//     });

//     const updateTodoMutation = useMutation(updateJob, {
//         onSuccess: () => {
//             // Invalidates cache and refetch
//             queryClient.invalidateQueries("jobs");
//         },
//     });

//     const deleteTodoMutation = useMutation(deleteJob, {
//         onSuccess: () => {
//             // Invalidates cache and refetch
//             queryClient.invalidateQueries("jobs");
//         },
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addTodoMutation.mutate({ userId: 1, title: newJob, completed: false });
//         setNewJob("");
//     };

//     const newItemSection = (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="new-todo">Enter a new todo item</label>
//             <div className="new-todo">
//                 <input
//                     type="text"
//                     id="new-todo"
//                     value={newJob}
//                     onChange={(e) => setNewJob(e.target.value)}
//                     placeholder="Enter new Job"
//                 />
//             </div>
//             <button className="submit">
//                 <FontAwesomeIcon icon={faUpload} />
//             </button>
//         </form>
//     );

//     let content;
//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isError) {
//         content = <p>{error.message}</p>;
//     } else {
//         content = jobs.map((job) => {
//             return (
//                 <article key={job.id}>
//                     <div className="todo">
//                         <input
//                             type="checkbox"
//                             checked={job.completed}
//                             id={job.id}
//                             onChange={() =>
//                                 updateTodoMutation.mutate({
//                                     ...job,
//                                     completed: !job.completed,
//                                 })
//                             }
//                         />
//                         <label htmlFor={job.id}>{job.title}</label>
//                     </div>
//                     <button
//                         className="trash"
//                         onClick={() =>
//                             deleteTodoMutation.mutate({ id: job.id })
//                         }
//                     >
//                         <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                 </article>
//             );
//         });
//     }

//     return (
//         <main>
//             <h1>Todo List</h1>
//             {newItemSection}
//             {content}
//         </main>
//     );
// };
