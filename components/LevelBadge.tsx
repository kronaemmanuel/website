interface BadgeProps {
  width: number;
  roundedAmount: string;
  color: string;
  styles: string;
}

function Badge(props: BadgeProps) {
  const { width, roundedAmount, color, styles } = props;
  return (
    <div
      class={`w-${width} h-${width} bg-${color}-400 rounded-${roundedAmount} border-8 border-${color}-300 transform rotate-45 ${styles}`}
    >
    </div>
  );
}

const levels = [
  {
    width: 16,
    roundedAmount: "2xl",
    color: "purple",
  },
  {
    width: 14,
    roundedAmount: "xl",
    color: "yellow",
  },
  {
    width: 12,
    roundedAmount: "xl",
    color: "pink",
  },
];

interface LevelBadgeProps {
  level: number;
}

export default function LevelBadge(props: LevelBadgeProps) {
  const level = levels[props.level - 1];
  const { width, color, roundedAmount } = level;
  return (
    <div class="flex items-center justify-center my-2">
      {props.level === 1 && (
        <>
          <Badge
            color="blue"
            width={12}
            roundedAmount="xl"
            styles="order-1 translate-x-3"
          />
          <Badge
            color="yellow"
            width={12}
            roundedAmount="xl"
            styles="order-3 -translate-x-3"
          />
        </>
      )}
      <Badge
        color={color}
        width={width}
        roundedAmount={roundedAmount}
        styles="order-2 z-10"
      />
    </div>
  );
}
