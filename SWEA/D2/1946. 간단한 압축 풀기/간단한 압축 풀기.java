import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Solution {

	public static void main(String[] args) throws FileNotFoundException {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		
		for(int tc = 1; tc<=T; tc++) {
			int N = sc.nextInt();
			int length = 0;
			ArrayList<String> list = new ArrayList<>();
			for(int i=0;i<N;i++) {
				String s = sc.next();
				int n = sc.nextInt();
				length += n;
				for(int j=0;j<n;j++) {
					list.add(s);
				}
			}
            System.out.printf("#%d\n",tc);
			for(int i=0; i<list.size();i+=10) {
				for(int j=i; j<Math.min(i + 10, list.size()); j++) {
					String item = list.get(j);
					System.out.print(item);
				}
				System.out.println();
			}
		}
	}
}