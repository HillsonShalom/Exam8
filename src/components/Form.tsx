import { FormEvent, useState } from "react";
import { CreateMissionDto } from "../types/createMissionDto";
import apiContext from "../service/apiContext";

const submit = async (e: FormEvent, dto: CreateMissionDto) => {
  e.preventDefault();
  try {
    const res = await apiContext.createMission(dto);
    console.log(res);
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    alert("EEEE" + error.message);
  }
};

const Form = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Pending" | "In Progress" | "Completed">(
    "Pending"
  );
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        submit(e, { name, status, priority, description });
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <select
        className="form-select"
        aria-label="Default select example"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as "Pending" | "In Progress" | "Completed");
        }}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select
        className="form-select"
        aria-label="Default select example"
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value as "High" | "Medium" | "Low");
        }}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
