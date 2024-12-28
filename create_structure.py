import os

# Configuration
base_directory = os.path.dirname(os.path.abspath(__file__))  # Get the directory of the script
exclude_list = [".venv", ".vscode", ".github", ".git", "create_structure.py", "project_structure.txt", ".cursorrules"]

def generate_tree(directory, prefix="", exclude=None):
    if exclude is None:
        exclude = []

    entries = sorted(os.listdir(directory))  # Sort entries alphabetically
    tree = ""
    file_contents = []

    for i, entry in enumerate(entries):
        if entry in exclude:
            continue

        path = os.path.join(directory, entry)
        is_last = i == len(entries) - 1
        connector = "└── " if is_last else "├── "

        tree += f"{prefix}{connector}{entry}\n"

        if os.path.isdir(path):
            extension = "    " if is_last else "│   "
            subtree, subcontents = generate_tree(path, prefix + extension, exclude)
            tree += subtree
            file_contents.extend(subcontents)
        else:
            # Add file contents to the list
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    file_contents.append(f"\n\n{'='*80}\nFile: {path}\n{'='*80}\n{content}")
            except Exception as e:
                file_contents.append(f"\n\n{'='*80}\nFile: {path}\nError reading file: {str(e)}\n{'='*80}")

    return tree, file_contents

# Generate the tree structure and file contents
tree_structure, all_file_contents = generate_tree(base_directory, exclude=exclude_list)

# Save the output to a file in the same directory as the script
output_file = os.path.join(base_directory, "project_structure.txt")
with open(output_file, "w", encoding="utf-8") as file:
    file.write("PROJECT STRUCTURE:\n")
    file.write("="*80 + "\n\n")
    file.write(tree_structure)
    file.write("\n\nFILE CONTENTS:\n")
    file.write("="*80)
    for content in all_file_contents:
        file.write(content)

print(f"Project structure and file contents saved in: {output_file}")