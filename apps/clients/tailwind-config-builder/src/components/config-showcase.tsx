import { ColorRole } from "@app/lib/type";
import { motion } from "framer-motion";

interface ColorShowcaseProps {
  prevColors: Record<ColorRole, string>;
  colors: Record<ColorRole, string>;
}

const DEFAULT_TRANSITION = { duration: 0.5, ease: "easeInOut" };

export default function ConfigShowcase({ prevColors, colors }: ColorShowcaseProps): JSX.Element {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-xl text-accent font-semibold mb-4">Showcase</h2>
      <div className="space-y-4">
        { /* Header */ }
        <motion.div
          className="col-span-full p-4 rounded-lg"
          initial={ { backgroundColor: prevColors.background } }
          animate={ { backgroundColor: colors.background } }
          transition={ DEFAULT_TRANSITION }
          style={ { backgroundColor: colors.background } }>
          <motion.h3
            initial={ { color: prevColors.accent } }
            animate={ { color: colors.accent } }
            transition={ DEFAULT_TRANSITION }
            style={ { color: colors.accent } }
            className="text-lg font-semibold">
            Dashboard
          </motion.h3>
        </motion.div>

        { /* Main content */ }
        <motion.div
          initial={ { backgroundColor: prevColors.background } }
          animate={ { backgroundColor: colors.background } }
          transition={ DEFAULT_TRANSITION }
          style={ { backgroundColor: colors.background } }
          className="p-4 rounded-b-lg">
          { /* Chart-like element */ }
          <div className="mb-4 h-40 flex items-end space-x-2">
            { [40, 60, 30, 100, 70, 50].map((height, index) => (
              <motion.div
                key={ index }
                initial={ { backgroundColor: prevColors.primary } }
                animate={ { backgroundColor: colors.primary } }
                transition={ DEFAULT_TRANSITION }
                style={ { backgroundColor: colors.primary, height: `${ height }%` } }
                className="flex-1 rounded-t"></motion.div>
            )) }
          </div>

          { /* Text content */ }
          <motion.p
            initial={ { color: prevColors.accent } }
            animate={ { color: colors.accent } }
            transition={ DEFAULT_TRANSITION }
            style={ { color: colors.accent } }
            className="text-lg font-bold">
            This is how your accent text would look like with the selected colors.
          </motion.p>
          <motion.p
            initial={ { color: prevColors.primary } }
            animate={ { color: colors.primary } }
            transition={ DEFAULT_TRANSITION }
            style={ { color: colors.primary } }
            className="font-semibold">
            This is how your primary text would look like with the selected colors.
          </motion.p>
          <motion.p
            initial={ { color: prevColors.secondary } }
            animate={ { color: colors.secondary } }
            transition={ DEFAULT_TRANSITION }
            style={ { color: colors.secondary } }
            className="mb-3 text-sm">
            This is how your secondary text would look like with the selected colors.
          </motion.p>

          { /* Buttons */ }
          <div className="space-x-2">
            <motion.button
              initial={ { backgroundColor: prevColors.primary } }
              animate={ { backgroundColor: colors.primary } }
              transition={ DEFAULT_TRANSITION }
              style={ { backgroundColor: colors.primary } }
              className="px-4 py-2 rounded text-white">
              Primary Button
            </motion.button>
            <motion.button
              initial={ { backgroundColor: prevColors.secondary } }
              animate={ { backgroundColor: colors.secondary } }
              transition={ DEFAULT_TRANSITION }
              style={ { backgroundColor: colors.secondary } }
              className="px-4 py-2 rounded text-white">
              Secondary Button
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
