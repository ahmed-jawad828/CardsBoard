// This widget will open an Iframe window with buttons to show a toast message and close the window.

const { widget } = figma;
const { useEffect, Text, AutoLayout } = widget;

function Widget() {
  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === "showToast") {
        figma.notify("Hello widget");
      }
      if (msg.type === "close") {
        figma.closePlugin();
      }
    };
  });
  let TruncateCardDescription = "TUK components...";
  let CompleteCardDescription =
    "TUK components needs to be profiled & memoized accordingly.";

  let CardAssignedTo = "Shahid Afridi - Senior DevOps Engineer";
  let TruncateCardAssignedTo = "Shahid Afridi";

  let DueDate = "14th, August 2050";
  return (
    <AutoLayout
      width="hug-contents"
      direction="vertical"
      // horizontalAlignItems="center"
      verticalAlignItems="start"
      height="hug-contents"
      padding={17}
      fill="#34d399"
      cornerRadius={20}
      spacing={12}
      onClick={async () => {
        await new Promise((resolve) => {
          figma.showUI(__html__);
          figma.ui.on("message", (msg) => {
            if (msg === "hello") {
              figma.notify(`Hello Widgets`);
            }
            if (msg === "close") {
              figma.closePlugin();
            }
          });
        });
      }}
    >
      <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        // fill="#fdba74"
        // padding={10}
        width={"fill-parent"}
      >
        <Text
          fontSize={24}
          horizontalAlignText="center"
          fill="#FFFFFF"
          fontWeight={"bold"}
        >
          TUK Optimization
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="end"
        fill="#fdba74"
        padding={10}
        cornerRadius={10}
        width={"fill-parent"}
        // width={300}
      >
        <Text
          fontSize={18}
          horizontalAlignText="left"
          fill="#FFFFFF"
          fontWeight={"bold"}
          // width={200}
        >
          Description
        </Text>
        <Text
          fontSize={16}
          horizontalAlignText="left"
          fill="#44403c"
          // width={200}
        >
          &nbsp; {TruncateCardDescription}
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        verticalAlignItems="end"
        fill="#fdba74"
        padding={10}
        cornerRadius={10}
        width={"fill-parent"}
      >
        <Text
          fontSize={18}
          horizontalAlignText="left"
          fill="#FFFFFF"
          fontWeight={"bold"}
          // width={200}
        >
          Assigned to
        </Text>
        <Text
          fontSize={16}
          horizontalAlignText="left"
          fill="#44403c"
          // width={200}
        >
          &nbsp; {TruncateCardAssignedTo}
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="end"
        fill="#fdba74"
        padding={10}
        cornerRadius={10}
        width={"fill-parent"}
      >
        <Text
          fontSize={18}
          horizontalAlignText="left"
          fill="#FFFFFF"
          fontWeight={"bold"}
          // width={200}
        >
          Due Date
        </Text>
        <Text
          fontSize={16}
          horizontalAlignText="left"
          fill="#44403c"
          // width={200}
        >
          &nbsp; {DueDate}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
