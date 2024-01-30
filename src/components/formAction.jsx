import { Button } from "primereact/button";

function FormAction({
    handleSubmit,
    type = 'Button',
    action = 'submit',
    text,
    loading
}) {
    return (
        <>
            {
                type === 'Button' ?
                    <Button
                        type={action}
                        loading={loading}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#8BC349] hover:bg-[#92C853] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10 "
                        // className="w-full"
                        severity="help"
                        label={text}
                        onClick={handleSubmit}
                    ></Button>
                    :
                    <></>
            }
        </>
    )
}

export default FormAction;