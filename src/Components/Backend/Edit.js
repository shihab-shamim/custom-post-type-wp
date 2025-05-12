import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Slider from "../slider/Slider";

const Edit = (props) => {
  const { attributes, setAttributes, clientId,device } = props;
  // const { sliders } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes ,device}} />

      <div {...useBlockProps()}>
        <Style device={device} attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
         
         <Slider attributes={attributes} setAttributes={setAttributes} />
        </div>
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select('core/editor');
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
