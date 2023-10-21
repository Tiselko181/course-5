import PropTypes from "prop-types";

DoneToDoTask.propTypes = {
    headers: PropTypes.object,
    doneToDo: PropTypes.object,
    index: PropTypes.number,
};

export default function DoneToDoTask({ doneToDo, index, headers }) {
    return (
        <p className="flex border-b border-t py-3">
            <span className="grow block border-r">
                {
                    headers ?
                        headers.title1 :
                        (index + 1) + '. ' + doneToDo.toDo
                }
            </span>
            <span className="block text-center w-[200px] px-3 border-r">
                {headers ?
                    headers.title2 : new Date(doneToDo.date).toLocaleDateString()
                }
            </span>
            <span className="block text-center w-[200px] px-3 ">
                {headers ?
                    headers.title3 : new Date(doneToDo.doneDate).toLocaleDateString()
                }
            </span>
        </p>
    );
}
