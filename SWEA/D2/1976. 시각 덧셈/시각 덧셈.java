import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for(int tc=1; tc <= T; tc++) {
			int h1 = sc.nextInt();
			int m1 = sc.nextInt();
			int h2 = sc.nextInt();
			int m2 = sc.nextInt();
			
			int sumH = h1 + h2;
			int sumM = m1 + m2;
			
			if(sumM > 60) {
				sumH += 1;
				sumM -= 60;
			}
			if(sumH > 12) {
				sumH -= 12;
			}
			System.out.printf("#%d %d %d\n", tc, sumH, sumM);
		}
	}

}
