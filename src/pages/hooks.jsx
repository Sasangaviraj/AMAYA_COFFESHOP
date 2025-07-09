
import useForm from "../hooks/useForm";

const HooksScreen = () => {
// 🟡 form වල values manage කරන්න useState
    const {formData,handleChange,resetForm} = useForm({
        name:"",
        email:"",
    })

 

// 🔵 form එක submit කරන function
  const handleSubmit = (event) => {
    event.preventDefault(); // default reload එක නවත්තනවා
    console.log("ඔයාගේ දත්ත:", formData); // form data console එකට print වෙනවා

    resetForm();// optional: form එක clear වෙනවා
  };





  return (
    <div>
      <h2>Regitration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      <br />

      
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
     
      <br />

      <button type="submit" className="cursor-pointer border p-3 mt-4">submit</button>
      </form>
    </div>
  );
};

export default HooksScreen;
