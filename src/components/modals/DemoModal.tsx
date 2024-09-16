import Text from "@components/commons/Text";

function DemoModal() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-background">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
      <div className="p-4">
        <Text size="lg">
          <b>The Coldest Sunset</b>
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </Text>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default DemoModal;
