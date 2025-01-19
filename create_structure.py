import os
import time

# Configuration
base_directory = os.path.dirname(os.path.abspath(__file__))  # Get the directory of the script
exclude_list = [".venv", ".vscode", ".github", ".git", "create_structure.py", "project_structure.txt", ".cursorrules"]

def read_file_content(path):
    """Read file content with retries"""
    max_retries = 3
    retry_delay = 0.1
    
    for attempt in range(max_retries):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            if attempt == max_retries - 1:  # Last attempt
                raise
            time.sleep(retry_delay)
    
    return None  # Should never reach here due to raise above

def generate_tree(directory, prefix="", exclude=None):
    if exclude is None:
        exclude = []
    
    try:
        # Force directory refresh using scandir() and sort by name
        entries = sorted(
            [e for e in os.scandir(directory) if e.name not in exclude],
            key=lambda e: e.name.lower()  # Sort case-insensitive
        )
    except OSError as e:
        print(f"Error accessing directory {directory}: {e}")
        return "", []

    tree = ""
    file_contents = []

    for i, entry in enumerate(entries):
        path = entry.path
        is_last = i == len(entries) - 1
        connector = "└── " if is_last else "├── "

        tree += f"{prefix}{connector}{entry.name}\n"

        if entry.is_dir():
            extension = "    " if is_last else "│   "
            subtree, subcontents = generate_tree(path, prefix + extension, exclude)
            tree += subtree
            file_contents.extend(subcontents)
        else:
            try:
                content = read_file_content(path)
                file_contents.append(f"\n\n{'='*80}\nFile: {path}\n{'='*80}\n{content}")
            except Exception as e:
                print(f"Warning: Could not read file {path}: {e}")
                file_contents.append(f"\n\n{'='*80}\nFile: {path}\nError reading file: {str(e)}\n{'='*80}")

    return tree, file_contents

def main():
    try:
        # Clear any existing project_structure.txt file
        output_file = os.path.join(base_directory, "project_structure.txt")
        if os.path.exists(output_file):
            os.remove(output_file)
            time.sleep(0.1)  # Small delay to ensure file is removed
        
        # Generate the tree structure and file contents
        tree_structure, all_file_contents = generate_tree(base_directory, exclude=exclude_list)
        
        # Write output
        with open(output_file, "w", encoding='utf-8') as file:
            file.write("PROJECT STRUCTURE:\n")
            file.write("="*80 + "\n\n")
            file.write(tree_structure)
            file.write("\n\nFILE CONTENTS:\n")
            file.write("="*80)
            for content in all_file_contents:
                file.write(content)

        print(f"Project structure and file contents saved in: {output_file}")
        
    except Exception as e:
        print(f"Error occurred while generating project structure: {e}")

if __name__ == "__main__":
    main()