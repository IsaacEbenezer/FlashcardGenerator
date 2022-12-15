import React from "react";
import GroupCard from "./GroupCard";
import TermsCard2 from "./TermsCard";
import { useFormik } from "formik";
import AddDynamicInput from "./AddDynamicInput";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../../redux/action/Action";

const Createbutton = () => {
  // to extract data from the Redux store
  const state = useSelector((state) => state.Reducer.inputData);

  //to the dispatch function from the Redux store
  const dispatch = useDispatch();

  const initialValues = {
    groupName: "",
    description: "",
    term: "",
    defination: "",
  };

  const onSubmit = (values) => {
    // console.log("subit data: ", values);
    const currentValue = {
      term: formik.values.term,
      defination: formik.values.defination,
    };

    state.push(currentValue);
    dispatch(
      addGroup({
        state,
        group: {
          groupName: formik.values.groupName,
          description: formik.values.description,
        },
      })
    );
    formik.resetForm();
  };

  const validate = (values) => {
    let errors = {};
    if (values.groupName.length < 3) {
      errors.groupName = " minimum 3 characters required!!";
    }
    if (values.description.split(" ").length < 4) {
      errors.description = " minimum 3 words required!!";
    }
    if (values.term.length < 3) {
      errors.term = " minimum 3 characters required!!";
    }
    if (values.defination.split(" ").length < 4) {
      errors.defination = " minimum 3 words required!! ";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <GroupCard formik={formik} />
      {/*Adding Dynamic input */}
      <div className="mt-6 sm:px-14 px-10 py-7 bg-white rounded-md shadow-lg">
        <AddDynamicInput />
        <TermsCard2 formik={formik} />
      </div>
      <div className="py-20 flex justify-center items-center ">
        <button className="focus:outline-none focus:ring focus:ring-blue-200 bg-red-700 text-yellow-50 px-14 py-2 rounded-md">
          Create
        </button>
      </div>
    </form>
  );
};

export default Createbutton;