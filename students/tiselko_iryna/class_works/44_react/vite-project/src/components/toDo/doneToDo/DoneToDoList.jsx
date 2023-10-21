import Headings from "../../../ui/heading/Heading";
import PropTypes from "prop-types";

DoneToDoList.propTypes = {
    children: PropTypes.object
};

export default function DoneToDoList({ children }) {
    return (
        <>
            <Headings
                type="h2"
                props={{ className: "mb-5 text2xl text-center font-bold" }}
            >
                Finnished Tasks
            </Headings >
            {children}
        </>
    );
}
